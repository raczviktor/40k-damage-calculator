export default class Weapon {
  constructor({ 
    attacks,
    bs,
    strength,
    ap,
    damage,
    lethal = false,
    sustained = 0,
    devastating = false,
    twinlinked = false,
    rapidFireX = 0,
    withinHalfRange = false,
    rerollHit = 'none',
    rerollWound = 'none'
  }) {
    this.attacks = +attacks;
    this.bs = +bs;
    this.strength = +strength;
    this.ap = +ap;
    this.damage = +damage;
    this.lethal = !!lethal;
    this.sustained = +sustained;
    this.devastating = !!devastating;
    this.twinlinked = !!twinlinked;
    this.rapidFireX = +rapidFireX;
    this.withinHalfRange = !!withinHalfRange;
    this.rerollHit = rerollHit;
    this.rerollWound = rerollWound;
  }

  getHitChance() {
    const chance = (7 - this.bs) / 6;
    if (this.rerollHit === 'none') return chance;
    if (this.rerollHit === '1s') return chance + (1 / 6) * chance;
    if (this.rerollHit === 'all') return chance + (1 - chance) * chance;
  }

  getWoundRoll(toughness) {
    if (this.strength >= 2 * toughness) return 2;
    if (this.strength > toughness) return 3;
    if (this.strength === toughness) return 4;
    if (this.strength * 2 <= toughness) return 6;
    return 5;
  }

  getWoundChance(toughness) {
    const woundRoll = this.getWoundRoll(toughness);
    const chance = (7 - woundRoll) / 6;
    if (this.rerollWound === 'none') return chance;
    if (this.rerollWound === '1s') return chance + (1 / 6) * chance;
    if (this.rerollWound === 'all') return chance + (1 - chance) * chance;
  }
}
