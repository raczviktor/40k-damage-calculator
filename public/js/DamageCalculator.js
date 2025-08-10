export default class DamageCalculator {
  constructor(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
  }

  clamp01(x) { return Math.max(0, Math.min(1, x)); }

  withReroll(p, mode) {
    if (mode === 'all') return this.clamp01(p + (1 - p) * p);
    if (mode === '1s')  return this.clamp01(p + (1 / 6) * p);
    return this.clamp01(p);
  }

  pSixWithReroll(mode) {
    if (mode === 'all') return 11 / 36;
    if (mode === '1s')  return 7 / 36;
    return 1 / 6;
  }

  effectiveWoundReroll(perWeaponMode, twinlinkedFlag) {
    return twinlinkedFlag ? 'all' : (perWeaponMode || 'none');
  }

  getSaveChance(ap) {
    const save = Number(this.defender.save || 7);
    const invuln = Number(this.defender.invuln || 0);
    let modSave = save - Number(ap || 0);
    modSave = Math.max(2, Math.min(7, modSave));
    const effectiveSave = (invuln > 0) ? Math.min(modSave, invuln) : modSave;
    const p = (7 - effectiveSave) / 6;
    return this.clamp01(p);
  }

  calculateTotal() {
    let rdHits = 0, rdWounds = 0, rdFailed = 0, rdDamage = 0;

    for (const weapon of this.attacker.weapons) {
      const rapidShots = (weapon.withinHalfRange && weapon.rapidFireX > 0) ? weapon.rapidFireX : 0;
      const shots = (weapon.attacks || 0) + rapidShots;
      if (shots <= 0) continue;

      const baseHitP = this.clamp01(weapon.getHitChance());
      const hitReroll = weapon.rerollHit || 'none';
      const effHitP = this.withReroll(baseHitP, hitReroll);
      const p6Hit = this.pSixWithReroll(hitReroll);

      const rdExtraHits = weapon.sustained > 0 ? Math.round((p6Hit * shots) * weapon.sustained) : 0;
      const rdBaseHits = Math.round(effHitP * shots);
      let rdHitsThis = rdBaseHits + rdExtraHits;

      let rdAuto = weapon.lethal ? Math.round(p6Hit * shots) : 0;
      rdAuto = Math.min(rdAuto, rdHitsThis);

      let rdPool = Math.max(0, rdHitsThis - rdAuto);
      const baseWoundP = this.clamp01(weapon.getWoundChance(this.defender.toughness));
      const woundReroll = this.effectiveWoundReroll(weapon.rerollWound || 'none', !!weapon.twinlinked);
      const effWoundP = this.withReroll(baseWoundP, woundReroll);
      const p6Wound = Math.min(effWoundP, this.pSixWithReroll(woundReroll));

      const rdSucc = Math.round(rdPool * effWoundP);
      const rdCrit = Math.min(rdSucc, Math.round(rdPool * p6Wound));
      const rdNormal = Math.max(0, rdSucc - rdCrit);
      const rdWoundsThis = rdAuto + rdCrit + rdNormal;

      const saveP = this.getSaveChance(weapon.ap || 0);
      let rdFailThis = 0, rdDmgThis = 0;
      if (weapon.devastating) {
        const rdDmgCrit = rdCrit * (weapon.damage || 0);
        const rdToSave = rdAuto + rdNormal;
        rdFailThis = Math.round(rdToSave * (1 - saveP));
        const rdDmgNorm = rdFailThis * (weapon.damage || 0);
        rdDmgThis = rdDmgCrit + rdDmgNorm;
      } else {
        rdFailThis = Math.round(rdWoundsThis * (1 - saveP));
        rdDmgThis = rdFailThis * (weapon.damage || 0);
      }

      rdHits += rdHitsThis;
      rdWounds += rdWoundsThis;
      rdFailed += rdFailThis;
      rdDamage += rdDmgThis;
    }

    return {
      roundedHits: rdHits,
      roundedWounds: rdWounds,
      roundedFailedSaves: rdFailed,
      roundedDamage: rdDamage
    };
  }
}
