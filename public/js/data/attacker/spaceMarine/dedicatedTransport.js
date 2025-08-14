import Attacker from '../../../model/Attacker.js';
import Weapon from '../../../model/Weapon.js';
import WeaponMount from '../../../model/WeaponMount.js';

const bloodAngelDedicatedTransport = {
  "Impulsor": new Attacker({
    name: "Impulsor",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Bellicatus missile array",
          attacks: 2, bs: 3, strength: 8, ap: -2, damage: 3
        })
      })
    ],
    meleeMounts: []
  })
};

export default bloodAngelDedicatedTransport;
