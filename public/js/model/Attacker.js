// model/Attacker.js
import WeaponMount from './WeaponMount.js';

export default class Attacker {
  constructor({
    name = '',
    points = null,
    modelCount = 1,
    rangedMounts = [],
    meleeMounts = []
  } = {}) {
    this.name = name;
    this.points = points;
    this.modelCount = Math.max(1, Math.floor(+modelCount || 1));

    this.ranged = rangedMounts.map(m => (m instanceof WeaponMount ? m : new WeaponMount(m)));
    this.melee  = meleeMounts.map(m => (m instanceof WeaponMount ? m : new WeaponMount(m)));
    this.mounts = [...this.ranged, ...this.melee];
  }

  getWeapons(phase) {
    if (phase !== 'ranged' && phase !== 'melee') {
      throw new Error('getWeapons: phase legyen "ranged" vagy "melee".');
    }
    const src = phase === 'ranged' ? this.ranged : this.melee;
    return src.map(m => m.weapon.cloneWith({
      attacks: m.weapon.attacks * m.count
    }));
  }
}
