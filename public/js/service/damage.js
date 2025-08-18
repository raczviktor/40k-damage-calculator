export function calcTotals(weapons, defender) {
  const clamp01 = (x) => Math.max(0, Math.min(1, x));
  const withReroll = (p, mode) => (
    mode === 'all' ? clamp01(p + (1 - p) * p) :
    mode === '1s'  ? clamp01(p + (1/6) * p)  :
    clamp01(p) // 'none' és 'one' → alap p (a 'one'-t külön kezeljük)
  );
  const pSixWithReroll = (mode) => (mode === 'all' ? 11/36 : mode === '1s' ? 7/36 : 1/6);
  const effectiveWoundReroll = (perWeaponMode, twinlinked) => twinlinked ? 'all' : (perWeaponMode || 'none');
  const getSaveChance = (ap, save, invuln) => {
    const baseSave = Number(save || 7);
    const inv = Number(invuln || 0);
    let modSave = Math.max(2, Math.min(7, baseSave - Number(ap || 0)));
    const eff = (inv > 0) ? Math.min(modSave, inv) : modSave;
    return clamp01((7 - eff) / 6);
  };

  function computeScenario(opts) {
    const { stationaryHeavy, halfRange, lanceCharge } = opts;
    let rdHits=0, rdWounds=0, rdFailed=0, rdDamage=0;

    for (const weapon of weapons) {
      const rapidShots = (halfRange && weapon.rapidFireX > 0) ? weapon.rapidFireX : 0;
      const shots = (weapon.attacks || 0) + rapidShots;
      if (shots <= 0) continue;

      const baseHitP = (() => {
        if (stationaryHeavy && weapon.heavy) {
          const orig = weapon.bs;
          const newBs = Math.max(2, (Number(orig ?? 7)) - 1);
          weapon.bs = newBs;
          const p = clamp01(weapon.getHitChance());
          weapon.bs = orig;
          return p;
        }
        return clamp01(weapon.getHitChance());
      })();

      const hitRerollMode = weapon.rerollHit || 'none';
      let baseHitsExp;
      if (hitRerollMode === 'one') {
        baseHitsExp = baseHitP * shots + baseHitP * (1 - Math.pow(baseHitP, shots));
      } else {
        const effHitP = withReroll(baseHitP, hitRerollMode);
        baseHitsExp = effHitP * shots;
      }

      const p6Hit = pSixWithReroll(hitRerollMode);
      const rdExtraHits = weapon.sustained > 0 ? Math.round((p6Hit * shots) * weapon.sustained) : 0;
      const rdBaseHits = Math.round(baseHitsExp);
      let rdHitsThis = rdBaseHits + rdExtraHits;

      let rdAuto = weapon.lethal ? Math.round(p6Hit * shots) : 0;
      rdAuto = Math.min(rdAuto, rdHitsThis);

      let rdPool = Math.max(0, rdHitsThis - rdAuto);

      let baseWoundP = clamp01(weapon.getWoundChance(defender.toughness));
      if (lanceCharge && weapon.lance) {
        baseWoundP = clamp01(baseWoundP + 1/6);
      }

      const woundRerollMode = effectiveWoundReroll(weapon.rerollWound || 'none', !!weapon.twinlinked);

      let effWoundP, rdSucc;
      if (woundRerollMode === 'one') {
        effWoundP = baseWoundP;
        rdSucc = Math.round(rdPool * baseWoundP + baseWoundP * (1 - Math.pow(baseWoundP, rdPool)));
      } else {
        effWoundP = withReroll(baseWoundP, woundRerollMode);
        rdSucc = Math.round(rdPool * effWoundP);
      }

      const p6Wound = Math.min(effWoundP, pSixWithReroll(woundRerollMode));
      const rdCrit   = Math.min(rdSucc, Math.round(rdPool * p6Wound));
      const rdNormal = Math.max(0, rdSucc - rdCrit);
      const rdWoundsThis = rdAuto + rdCrit + rdNormal;

      const saveP = getSaveChance(weapon.ap || 0, defender.save, defender.invuln);

      const rawDamage = (weapon.damage || 0) + ((halfRange && (weapon.meltaX || 0) > 0) ? weapon.meltaX : 0);

      // per failed save cap (spillover tiltás)
      const rawWpm =
        defender?.woundsPerModel ??
        defender?.wounds ??
        defender?.modelWounds ??
        undefined;
      const perFailCap = Number.isFinite(+rawWpm) ? Math.max(1, +rawWpm) : Infinity;
      const perFailDamage = Math.min(rawDamage, perFailCap);

      let rdFailThis = 0, rdDmgThis = 0;
      if (weapon.devastating) {
        const rdDmgCrit = rdCrit * perFailDamage;
        const rdToSave  = rdAuto + rdNormal;
        rdFailThis = Math.round(rdToSave * (1 - saveP));
        const rdDmgNorm = rdFailThis * perFailDamage;
        rdDmgThis = rdDmgCrit + rdDmgNorm;
      } else {
        rdFailThis = Math.round(rdWoundsThis * (1 - saveP));
        rdDmgThis  = rdFailThis * perFailDamage;
      }

      rdHits   += rdHitsThis;
      rdWounds += rdWoundsThis;
      rdFailed += rdFailThis;
      rdDamage += rdDmgThis;
    }

    // ÚJ: unit-pool cap – a teljes sebzés nem haladhatja meg a modell(ek) össz-W-ját
    const unitModels =
      defender?.models ??
      defender?.modelCount ??
      1;
    const rawWpm =
      defender?.woundsPerModel ??
      defender?.wounds ??
      defender?.modelWounds ??
      undefined;
    if (Number.isFinite(+rawWpm)) {
      const totalCap = Math.max(1, +rawWpm) * Math.max(1, +unitModels);
      if (rdDamage > totalCap) rdDamage = totalCap;
    }

    return { rdHits, rdWounds, rdFailed, rdDamage };
  }

  const hasHeavy = weapons?.some(w => !!w.heavy);
  const hasRapid = weapons?.some(w => (w.rapidFireX || 0) > 0);
  const hasLance = weapons?.some(w => !!w.lance);
  const hasMelta = weapons?.some(w => (w.meltaX || 0) > 0);

  const heavyOpts = hasHeavy ? [false, true] : [false];
  const rangeOpts = (hasRapid || hasMelta) ? [false, true] : [false];
  const lanceOpts = hasLance ? [false, true] : [false];

  const scenarios = [];
  for (const H of heavyOpts) for (const R of rangeOpts) for (const L of lanceOpts)
    scenarios.push({ stationaryHeavy: H, halfRange: R, lanceCharge: L });

  if (scenarios.length === 1) {
    const { rdHits, rdWounds, rdFailed, rdDamage } = computeScenario(scenarios[0]);
    return { roundedHits: rdHits, roundedWounds: rdWounds, roundedFailedSaves: rdFailed, roundedDamage: rdDamage };
  }

  let sumHits=0, sumWounds=0, sumFailed=0, sumDamage=0;
  for (const sc of scenarios) {
    const r = computeScenario(sc);
    sumHits += r.rdHits; sumWounds += r.rdWounds; sumFailed += r.rdFailed; sumDamage += r.rdDamage;
  }
  const n = scenarios.length, avg = (x) => Math.round(x / n);
  return {
    roundedHits: avg(sumHits),
    roundedWounds: avg(sumWounds),
    roundedFailedSaves: avg(sumFailed),
    roundedDamage: avg(sumDamage)
  };
}
