import Attacker from '../../../model/Attacker.js';
import Weapon from '../../../model/Weapon.js';
import WeaponMount from '../../../model/WeaponMount.js';

const bloodAngelCharacter = {
  "Blood Angels Captain": new Attacker({
    name: "Blood Angels Captain",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Bolt pistol",
          attacks: 1, bs: 2, strength: 4, ap: 0, damage: 1
        })
      })
    ],
    meleeMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 2, strength: 5, ap: -2, damage: 2
        })
      })
    ]
  })
};

export default bloodAngelCharacter;
