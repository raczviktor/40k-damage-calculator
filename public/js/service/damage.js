const clamp01 = (x) => Math.max(0, Math.min(1, x));

const chanceWithReroll = (p, mode) =>
  mode === 'all' ? clamp01(p + (1 - p) * p)
  : mode === '1s' ? clamp01(p + (1/6) * p)
  : clamp01(p);

const chanceSixWithReroll = (mode) =>
  mode === 'all' ? 11/36
  : mode === '1s' ? 7/36
  : 1/6;

const effectiveWoundRerollMode = (perWeaponMode, twinlinked) =>
  twinlinked ? 'all' : (perWeaponMode || 'none');

const saveChance = (ap, save, invuln) => {
  const base = Number(save || 7);
  const inv = Number(invuln || 0);
  const modified = Math.max(2, Math.min(7, base - Number(ap || 0)));
  const effective = inv > 0 ? Math.min(modified, inv) : modified;
  return clamp01((7 - effective) / 6);
};

function computeHits(weapon, opts) {
  const { stationaryHeavy, halfRange } = opts;
  const rapidShots = (halfRange && weapon.rapidFireX > 0) ? weapon.rapidFireX : 0;
  const shots = (weapon.attacks || 0) + rapidShots;
  if (shots <= 0) return { roundedHits: 0, roundedAutoWoundsFromLethal: 0, hitPoolForWounds: 0 };

  const baseHitProbability = (() => {
    if (stationaryHeavy && weapon.heavy) {
      const original = weapon.bs;
      const boosted = Math.max(2, (Number(original ?? 7)) - 1);
      weapon.bs = boosted;
      const p = clamp01(weapon.getHitChance());
      weapon.bs = original;
      return p;
    }
    return clamp01(weapon.getHitChance());
  })();

  const hitRerollMode = weapon.rerollHit || 'none';

  const expectedBaseHits =
    hitRerollMode === 'one'
      ? baseHitProbability * shots + baseHitProbability * (1 - Math.pow(baseHitProbability, shots))
      : chanceWithReroll(baseHitProbability, hitRerollMode) * shots;

  const pSixHit = chanceSixWithReroll(hitRerollMode);
  const roundedExtraHits = weapon.sustained > 0 ? Math.round((pSixHit * shots) * weapon.sustained) : 0;
  const roundedBaseHits = Math.round(expectedBaseHits);
  const roundedHits = roundedBaseHits + roundedExtraHits;

  let roundedAutoWoundsFromLethal = weapon.lethal ? Math.round(pSixHit * shots) : 0;
  roundedAutoWoundsFromLethal = Math.min(roundedAutoWoundsFromLethal, roundedHits);

  const hitPoolForWounds = Math.max(0, roundedHits - roundedAutoWoundsFromLethal);

  return { roundedHits, roundedAutoWoundsFromLethal, hitPoolForWounds };
}

function computeWounds(weapon, defender, hitPoolForWounds, roundedAutoWoundsFromLethal, opts) {
  const { lanceCharge } = opts;

  let baseWoundProbability = clamp01(weapon.getWoundChance(defender.toughness));

  let woundPips = 0;
  if (lanceCharge && weapon.lance) woundPips += 1;
  if (weapon.plusOneToWound)       woundPips += 1;

  const adjustedBase = Math.min(5/6, baseWoundProbability + woundPips * (1/6));

  const woundRerollMode = effectiveWoundRerollMode(weapon.rerollWound || 'none', !!weapon.twinlinked);

  const roundedSuccessfulFromPool =
    woundRerollMode === 'one'
      ? Math.round(
          hitPoolForWounds * adjustedBase +
          adjustedBase * (1 - Math.pow(adjustedBase, hitPoolForWounds))
        )
      : Math.round(hitPoolForWounds * chanceWithReroll(adjustedBase, woundRerollMode));

  const effectiveProbForSix = (woundRerollMode === 'one')
    ? adjustedBase
    : chanceWithReroll(adjustedBase, woundRerollMode);

  const pSixWound = Math.min(effectiveProbForSix, chanceSixWithReroll(woundRerollMode));

  const roundedCritWounds = Math.min(
    roundedSuccessfulFromPool,
    Math.round(hitPoolForWounds * pSixWound)
  );

  const roundedNormalWounds = Math.max(0, roundedSuccessfulFromPool - roundedCritWounds);

  const roundedTotalWounds = roundedAutoWoundsFromLethal + roundedCritWounds + roundedNormalWounds;

  return { roundedTotalWounds, roundedCritWounds, roundedNormalWounds };
}


function computeDamage(weapon, defender, roundedAutoWoundsFromLethal, roundedCritWounds, roundedNormalWounds, halfRange) {
  const saveP = saveChance(weapon.ap || 0, defender.save, defender.invuln);
  const baseDamage = (weapon.damage || 0) + ((halfRange && (weapon.meltaX || 0) > 0) ? weapon.meltaX : 0);

  const woundsPerModel =
    defender?.woundsPerModel ??
    defender?.wounds ??
    defender?.modelWounds ??
    undefined;

  const perFailedSaveCap = Number.isFinite(+woundsPerModel) ? Math.max(1, +woundsPerModel) : Infinity;
  const damagePerFailed = Math.min(baseDamage, perFailedSaveCap);

  if (weapon.devastating) {
    const damageFromCrits = roundedCritWounds * damagePerFailed;
    const woundsNeedSave = roundedAutoWoundsFromLethal + roundedNormalWounds;
    const roundedFailed = Math.round(woundsNeedSave * (1 - saveP));
    const damageFromNormals = roundedFailed * damagePerFailed;
    return { roundedFailedSaves: roundedFailed, roundedDamage: damageFromCrits + damageFromNormals };
  } else {
    const totalWounds = roundedAutoWoundsFromLethal + roundedCritWounds + roundedNormalWounds;
    const roundedFailed = Math.round(totalWounds * (1 - saveP));
    return { roundedFailedSaves: roundedFailed, roundedDamage: roundedFailed * damagePerFailed };
  }
}

export function calcTotals(weapons, defender) {
  const hasHeavy   = weapons?.some(w => !!w.heavy);
  const hasRapid   = weapons?.some(w => (w.rapidFireX || 0) > 0);
  const hasLance   = weapons?.some(w => !!w.lance);
  const hasMelta   = weapons?.some(w => (w.meltaX || 0) > 0);

  const heavyOpts = hasHeavy ? [false, true] : [false];
  const rangeOpts = (hasRapid || hasMelta) ? [false, true] : [false];
  const lanceOpts = hasLance ? [false, true] : [false];

  function computeScenario(scenario) {
    const { stationaryHeavy, halfRange, lanceCharge } = scenario;

    let roundedHitsTotal = 0;
    let roundedWoundsTotal = 0;
    let roundedFailedTotal = 0;
    let roundedDamageTotal = 0;

    for (const weapon of weapons) {
      const { roundedHits, roundedAutoWoundsFromLethal, hitPoolForWounds } =
        computeHits(weapon, { stationaryHeavy, halfRange });

      const { roundedTotalWounds, roundedCritWounds, roundedNormalWounds } =
        computeWounds(weapon, defender, hitPoolForWounds, roundedAutoWoundsFromLethal, { lanceCharge });

      const { roundedFailedSaves, roundedDamage } =
        computeDamage(weapon, defender, roundedAutoWoundsFromLethal, roundedCritWounds, roundedNormalWounds, halfRange);

      roundedHitsTotal   += roundedHits;
      roundedWoundsTotal += roundedTotalWounds;
      roundedFailedTotal += roundedFailedSaves;
      roundedDamageTotal += roundedDamage;
    }

    const modelCount =
      defender?.models ??
      defender?.modelCount ??
      1;

    const woundsPerModel =
      defender?.woundsPerModel ??
      defender?.wounds ??
      defender?.modelWounds ??
      undefined;

    if (Number.isFinite(+woundsPerModel)) {
      const unitDamageCap = Math.max(1, +woundsPerModel) * Math.max(1, +modelCount);
      if (roundedDamageTotal > unitDamageCap) roundedDamageTotal = unitDamageCap;
    }

    return {
      roundedHits: roundedHitsTotal,
      roundedWounds: roundedWoundsTotal,
      roundedFailedSaves: roundedFailedTotal,
      roundedDamage: roundedDamageTotal
    };
  }

  const scenarios = [];
  for (const isStationary of heavyOpts)
    for (const isHalfRange of rangeOpts)
      for (const isLanceCharge of lanceOpts)
        scenarios.push({ stationaryHeavy: isStationary, halfRange: isHalfRange, lanceCharge: isLanceCharge });

  if (scenarios.length === 1) {
    return computeScenario(scenarios[0]);
  }

  let sumHits = 0, sumWounds = 0, sumFailed = 0, sumDamage = 0;
  for (const sc of scenarios) {
    const r = computeScenario(sc);
    sumHits   += r.roundedHits;
    sumWounds += r.roundedWounds;
    sumFailed += r.roundedFailedSaves;
    sumDamage += r.roundedDamage;
  }

  const scenarioCount = scenarios.length;
  const avgRounded = (x) => Math.round(x / scenarioCount);

  return {
    roundedHits:        avgRounded(sumHits),
    roundedWounds:      avgRounded(sumWounds),
    roundedFailedSaves: avgRounded(sumFailed),
    roundedDamage:      avgRounded(sumDamage)
  };
}
