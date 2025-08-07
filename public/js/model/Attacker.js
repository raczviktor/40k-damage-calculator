import Weapon from './Weapon.js';

export default class Attacker {
    constructor({ weapons = [] } = {}) {
        this.weapons = weapons.map(w => w instanceof Weapon ? w : new Weapon(w));
      }
}
