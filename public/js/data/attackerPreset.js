import Weapon from '../model/Weapon.js';
import Attacker from '../model/Attacker.js';

const attackerPreset = {
  "Space Marine Intercessor Squad": new Attacker({
    weapons: [
      new Weapon({
        name: "Bolt Rifle",
        attacks: 10,
        bs: 3,
        strength: 4,
        ap: -1,
        damage: 1,
        rerollHit: "none",
        rerollWound: "none",
        lethal: false,
        sustained: false,
      })
    ]
  }),

  "Astra Militarum Infantry Squad": new Attacker({
    weapons: [
      new Weapon({
        name: "Lasgun",
        attacks: 20,
        bs: 4,
        strength: 3,
        ap: 0,
        damage: 1,
        rerollHit: "none",
        rerollWound: "none",
        lethal: false,
        sustained: false,
      })
    ]
  }),

  "Blood Angels Assault Squad": new Attacker({
    weapons: [
      new Weapon({
        name: "Chainsword",
        attacks: 15,
        bs: 3,
        strength: 4,
        ap: -1,
        damage: 1,
        rerollHit: "1s",
        rerollWound: "none",
        lethal: false,
        sustained: false,
      }),
      new Weapon({
        name: "Bolt Pistol",
        attacks: 5,
        bs: 3,
        strength: 4,
        ap: 0,
        damage: 1,
        rerollHit: "none",
        rerollWound: "none",
        lethal: false,
        sustained: false,
      })
    ]
  }),
};

export default attackerPreset;
