export default class Weapon {
  constructor({
    id = null,
    name = '',
    attacks = 0,
    bs = 4,
    strength = 4,
    ap = 0,
    damage = 1,

    lethal = false,
    sustained = 0,
    devastating = false,
    twinlinked = false,
    rapidFireX = 0,
    withinHalfRange = false,
    rerollHit = 'none',
    rerollWound = 'none',
    plusOneToWound = false,

    ignoreCover = false,
    torrent = false,
    lance = false,
    blast = false,
    meltaX = 0,
    heavy = false,
    anti = null // pl. { keyword: 'VEHICLE', x: 4 }
  } = {}) {
    this.id = id;
    this.name = name;

    this.attacks = +attacks;
    this.bs = +bs;
    this.strength = +strength;
    this.ap = +ap;
    this.damage = +damage;

    this.lethal = !!lethal;
    this.sustained = Math.max(0, +sustained);
    this.devastating = !!devastating;
    this.twinlinked = !!twinlinked;
    this.rapidFireX = Math.max(0, +rapidFireX);
    this.withinHalfRange = !!withinHalfRange;

    this.rerollHit = rerollHit || 'none';
    this.rerollWound = rerollWound || 'none';
    this.plusOneToWound = plusOneToWound || false;

    this.ignoreCover = !!ignoreCover;
    this.torrent = !!torrent;
    this.lance = !!lance;
    this.blast = !!blast;
    this.meltaX = Math.max(0, +meltaX);
    this.heavy = !!heavy;
    this.anti = anti;
  }

  static fromCatalog(def = {}, mount = {}) {
    const pick = (o, keys) => keys.reduce((a, k) => (k in o ? (a[k] = o[k], a) : a), {});
    const baseKeys = ['id','name','attacks','bs','strength','ap','damage'];
    const modKeys = [
      'lethal','sustained','devastating','twinlinked','rapidFireX','withinHalfRange',
      'rerollHit','rerollWound','ignoreCover','torrent','lance','blast','meltaX','heavy','anti'
    ];
    const data = { ...pick(def, baseKeys), ...pick(mount, [...baseKeys, ...modKeys]) };
    return new Weapon(data);
  }

  cloneWith(overrides = {}) {
    return new Weapon({ ...this, ...overrides });
  }

  clamp01(x) { return Math.max(0, Math.min(1, x)); }

  getHitChance() {
    const base = this.clamp01((7 - this.bs) / 6);
    const mode = this.rerollHit;
    if (mode === 'all') return this.clamp01(base + (1 - base) * base);
    if (mode === '1s')  return this.clamp01(base + (1 / 6) * base);
    return base;
  }

  getWoundRoll(toughness) {
    const S = +this.strength;
    const T = +toughness;
    if (S >= 2 * T) return 2;
    if (S > T)      return 3;
    if (S === T)    return 4;
    if (S * 2 <= T) return 6;
    return 5;
  }

  getWoundChance(toughness) {
    const need = this.getWoundRoll(toughness);
    const base = this.clamp01((7 - need) / 6);
    const mode = this.twinlinked ? 'all' : (this.rerollWound || 'none');
    if (mode === 'all') return this.clamp01(base + (1 - base) * base);
    if (mode === '1s')  return this.clamp01(base + (1 / 6) * base);
    return base;
  }
}
