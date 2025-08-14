import Attacker from '../../../model/Attacker.js';
import Weapon from '../../../model/Weapon.js';
import WeaponMount from '../../../model/WeaponMount.js';

const bloodAngelOther = {
  "Sanguinary Guard": new Attacker({
    name: "Sanguinary Guard",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Angelus boltgun",
          attacks: 2, bs: 3, strength: 4, ap: -1, damage: 1
        })
      })
    ],
    meleeMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 3, bs: 3, strength: 5, ap: -2, damage: 2
        })
      })
    ]
  })
};

export default bloodAngelOther;
