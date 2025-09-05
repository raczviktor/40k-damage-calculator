import Attacker from '../../../model/Attacker.js';
import Weapon from '../../../model/Weapon.js';
import WeaponMount from '../../../model/WeaponMount.js';

const bloodAngelBattleline = {
  
  "Intercessor Squad (5, ranged)": new Attacker({
    name: "Intercessor Squad (5, ranged)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Astartes grenade launcher – krak",
          attacks: 1, bs: 3, strength: 9, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Bolt rifle",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, heavy: true
        })
      })
    ]
  }),
  "Intercessor Squad with lieutenant (5, ranged)": new Attacker({
    name: "Intercessor Squad with lieutenant (5, ranged)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Astartes grenade launcher – krak",
          attacks: 1, bs: 3, strength: 9, ap: -2, damage: 2, lethal: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Bolt rifle",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, heavy: true, lethal: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Master-crafted bolter",
          attacks: 2, bs: 2, strength: 4, ap: -1, damage: 2, lethal: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad (5, melee)": new Attacker({
    name: "Assault Intercessor Squad (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),
  "Assault Intercessor Squad (5, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),
  "Assault Intercessor Squad with Blood angel captain (5, melee, chainsword, liberator, rfw is on)": new Attacker({
    name: "Assault Intercessor Squad with Blood angel captain (5, melee, chainsword, liberator, rfw is on)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Master-crafted chainsword",
          attacks: 11, bs: 2, strength: 6, ap: -1, damage: 2, rerollWound: '1s',  sustainedX: 3, devastating: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with Blood angel captain (5, melee, Power fist, liberator, rfw is on)": new Attacker({
    name: "Assault Intercessor Squad with Blood angel captain (5, melee, Power fist, liberator, rfw is on)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 9, bs: 2, strength: 10, ap: -2, damage: 2, rerollWound: '1s',  sustainedX: 3, devastating: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad (10, melee)": new Attacker({
    name: "Assault Intercessor Squad (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),
  "Assault Intercessor Squad (5, melee, liberator, charge)": new Attacker({
    name: "Assault Intercessor Squad (5, melee, liberator, charge)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),
  "Assault Intercessor Squad (10, melee, liberator, charge)": new Attacker({
    name: "Assault Intercessor Squad (10, melee, liberator, charge)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),
/*
  "Assault Intercessor Squad with Blood angel captain (6, melee)": new Attacker({
    name: "Assault Intercessor Squad with Blood angel captain (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist bac",
          attacks: 5, bs: 3, strength: 8, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
    ]
  }),
  "Assault Intercessor Squad (5, melee, liberator, charge)": new Attacker({
    name: "Assault Intercessor Squad (5, melee, liberator, charge)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s'
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s'
        })
      })
    ]
  }),

  *


  /*
  "Heavy Intercessor Squad": new Attacker({
    name: "Heavy Intercessor Squad",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 8,
        weapon: new Weapon({
          name: "Heavy bolt rifle",
          attacks: 2, bs: 3, strength: 5, ap: -1, damage: 2, heavy: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Heavy bolter",
          attacks: 3, bs: 3, strength: 5, ap: -1, damage: 2, heavy: true
        })
      })
    ],
    meleeMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Close combat weapon",
          attacks: 2, bs: 3, strength: 4, ap: 0, damage: 1
        })
      })
    ]
  })
    */
};

export default bloodAngelBattleline;
