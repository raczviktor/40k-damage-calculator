export function calcTotals(weapons, defender) {
    const clamp01 = (x) => Math.max(0, Math.min(1, x));
    const withReroll = (p, mode) => (
      mode === 'all' ? clamp01(p + (1 - p) * p) :
      mode === '1s'  ? clamp01(p + (1/6) * p)  :
      clamp01(p)
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
  
    // Egyetlen szcenárió kiszámítása.
    // opts: { stationaryHeavy: bool, halfRange: bool, lanceCharge: bool }
    function computeScenario(opts) {
      const { stationaryHeavy, halfRange, lanceCharge } = opts;
      let rdHits=0, rdWounds=0, rdFailed=0, rdDamage=0;
  
      for (const weapon of weapons) {
        // Rapid Fire: fél táv esetén +X lövés
        const rapidShots = (halfRange && weapon.rapidFireX > 0) ? weapon.rapidFireX : 0;
        const shots = (weapon.attacks || 0) + rapidShots;
        if (shots <= 0) continue;
  
        // Heavy: mozdulatlanul +1 to hit (cap: 2+). Ideiglenesen csökkentjük a BS-t 1‑gyel.
        const baseHitP = (() => {
          if (stationaryHeavy && weapon.heavy) {
            const orig = weapon.bs;
            const newBs = Math.max(2, (Number(orig ?? 7)) - 1);
            weapon.bs = newBs;
            const p = clamp01(weapon.getHitChance());
            weapon.bs = orig; // visszaállítás
            return p;
          }
          return clamp01(weapon.getHitChance());
        })();
  
        const hitReroll = weapon.rerollHit || 'none';
        const effHitP = withReroll(baseHitP, hitReroll);
        const p6Hit = pSixWithReroll(hitReroll);
  
        const rdExtraHits = weapon.sustained > 0 ? Math.round((p6Hit * shots) * weapon.sustained) : 0;
        const rdBaseHits = Math.round(effHitP * shots);
        let rdHitsThis = rdBaseHits + rdExtraHits;
  
        // Lethal: auto-wound pool
        let rdAuto = weapon.lethal ? Math.round(p6Hit * shots) : 0;
        rdAuto = Math.min(rdAuto, rdHitsThis);
  
        let rdPool = Math.max(0, rdHitsThis - rdAuto);
  
        // Lance: charge esetén +1 to wound -> valószínűség +1/6, cap 0..1 (a reroll előtt alkalmazzuk)
        let baseWoundP = clamp01(weapon.getWoundChance(defender.toughness));
        if (lanceCharge && weapon.lance) {
          baseWoundP = clamp01(baseWoundP + 1/6);
        }
  
        const woundReroll = effectiveWoundReroll(weapon.rerollWound || 'none', !!weapon.twinlinked);
        const effWoundP = withReroll(baseWoundP, woundReroll);
        const p6Wound = Math.min(effWoundP, pSixWithReroll(woundReroll));
  
        const rdSucc = Math.round(rdPool * effWoundP);
        const rdCrit = Math.min(rdSucc, Math.round(rdPool * p6Wound));
        const rdNormal = Math.max(0, rdSucc - rdCrit);
        const rdWoundsThis = rdAuto + rdCrit + rdNormal;
  
        const saveP = getSaveChance(weapon.ap || 0, defender.save, defender.invuln);
        let rdFailThis = 0, rdDmgThis = 0;
  
        // Melta: fél távon +X sebzés (ha a fegyveren van meltaX)
        const effDamage = (weapon.damage || 0) + ((halfRange && (weapon.meltaX || 0) > 0) ? weapon.meltaX : 0);
  
        if (weapon.devastating) {
          const rdDmgCrit = rdCrit * effDamage; // mortal jellegű, nem menthető
          const rdToSave = rdAuto + rdNormal;
          rdFailThis = Math.round(rdToSave * (1 - saveP));
          const rdDmgNorm = rdFailThis * effDamage;
          rdDmgThis = rdDmgCrit + rdDmgNorm;
        } else {
          rdFailThis = Math.round(rdWoundsThis * (1 - saveP));
          rdDmgThis = rdFailThis * effDamage;
        }
  
        rdHits   += rdHitsThis;
        rdWounds += rdWoundsThis;
        rdFailed += rdFailThis;
        rdDamage += rdDmgThis;
      }
  
      return { rdHits, rdWounds, rdFailed, rdDamage };
    }
  
    // Érzékeljük, mely képességek aktívak a fegyverlistában
    const hasHeavy = weapons?.some(w => !!w.heavy);
    const hasRapid = weapons?.some(w => (w.rapidFireX || 0) > 0);
    const hasLance = weapons?.some(w => !!w.lance);
    const hasMelta = weapons?.some(w => (w.meltaX || 0) > 0);
  
    // Szcenáriók előállítása (csak az érintett tengelyeken 2-2 állapot)
    const heavyOpts = hasHeavy ? [false, true] : [false];
    // Fél táv tengely: akkor is legyen, ha nincs Rapid Fire, de van Melta
    const rangeOpts = (hasRapid || hasMelta) ? [false, true] : [false];
    const lanceOpts = hasLance ? [false, true] : [false];
  
    const scenarios = [];
    for (const H of heavyOpts) {
      for (const R of rangeOpts) {
        for (const L of lanceOpts) {
          scenarios.push({ stationaryHeavy: H, halfRange: R, lanceCharge: L });
        }
      }
    }
  
    // Ha egy tengely sem aktív, futtassunk egyetlen szcenáriót (gyorsabb)
    if (scenarios.length === 1) {
      const { rdHits, rdWounds, rdFailed, rdDamage } = computeScenario(scenarios[0]);
      return {
        roundedHits: rdHits,
        roundedWounds: rdWounds,
        roundedFailedSaves: rdFailed,
        roundedDamage: rdDamage
      };
    }
  
    // Több szcenárió: átlagolás (egyenlő súlyokkal)
    let sumHits=0, sumWounds=0, sumFailed=0, sumDamage=0;
    for (const sc of scenarios) {
      const r = computeScenario(sc);
      sumHits   += r.rdHits;
      sumWounds += r.rdWounds;
      sumFailed += r.rdFailed;
      sumDamage += r.rdDamage;
    }
    const n = scenarios.length;
    const avg = (x) => Math.round(x / n);
  
    return {
      roundedHits:        avg(sumHits),
      roundedWounds:      avg(sumWounds),
      roundedFailedSaves: avg(sumFailed),
      roundedDamage:      avg(sumDamage)
    };
  }