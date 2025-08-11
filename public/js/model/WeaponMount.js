// model/WeaponMount.js
import Weapon from './Weapon.js';

export default class WeaponMount {
  constructor({ weapon, count = 1 } = {}) {
    if (!weapon) throw new Error('WeaponMount: "weapon" kötelező');
    this.weapon = weapon instanceof Weapon ? weapon : new Weapon(weapon);
    this.count = Math.max(1, Math.floor(+count || 1));
  }
}
