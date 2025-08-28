import Attacker from '../../../model/Attacker.js';
import Weapon from '../../../model/Weapon.js';
import WeaponMount from '../../../model/WeaponMount.js';

const bloodAngelOther = {

  "Vindicator ranged": new Attacker({
    name: "Vindicator ranged",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Demolisher cannon",
          attacks: 7, bs: 3, strength: 14, ap: -3, damage: 4
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Storm bolter",
          attacks: 2, bs: 3, strength: 4, ap: 0, damage: 1
        })
      })
    ],
  }),
  "Gladiator lancer ranged": new Attacker({
    name: "Gladiator lancer ranged",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Icarus rocket pod",
          attacks: 2, bs: 3, strength: 8, ap: -1, damage: 2
        })
      }),
      new WeaponMount({
        weapon: new Weapon({
          name: "Ironhail heavy stubber",
          attacks: 2, bs: 3, strength: 8, ap: -1, damage: 2, rapidFire: 3,
        }),
      }),
      new WeaponMount({
        weapon: new Weapon({
          name: "Lancer laser destroyer",
          attacks: 2, bs: 3, strength: 14, ap: -4, damage: 7, rerollHit: 'one', rerollWound: 'one'
        }),
      }),
      new WeaponMount({
        weapon: new Weapon({
          name: "Storm bolter",
          attacks: 2, bs: 3, strength: 4, ap: 0, damage: 1, rapidFire: 2
        })
      })
    ],
  }),
  "Eradicator squad (3, ranged, melta)": new Attacker({
    name: "Eradicator squad (3, ranged, melta )",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Melta rifle",
          attacks: 1, bs: 3, strength: 9, ap: -4, damage: 4, heavy: true, meltaX: 2, rerollHit: 'all', rerollWound: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Multi-melta",
          attacks: 2, bs: 4, strength: 9, ap: -4, damage: 4, heavy: true, meltaX: 2, rerollHit: 'all', rerollWound: 'all'
        })
      })
    ],
  }),
  "Eradicator squad (3, ranged nomelta)": new Attacker({
    name: "Eradicator squad (3, ranged nomelta)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Melta rifle",
          attacks: 1, bs: 3, strength: 9, ap: -4, damage: 4, heavy: true, rerollHit: 'all', rerollWound: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Multi-melta",
          attacks: 2, bs: 4, strength: 9, ap: -4, damage: 4, heavy: true, rerollHit: 'all', rerollWound: 'all'
        })
      })
    ],
  }),
  "Repulsor Executioner (ranged, laser)": new Attacker({
    name: "Repulsor Executioner (ranged, laser)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Heavy laser destroyer",
          attacks: 2, bs: 3, strength: 16, ap: -4, damage: 7, heavy: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Heavy onslaught gatling cannon",
          attacks: 12, bs: 3, strength: 6, ap: 0, damage: 1, devastating: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Icarus rocket pod",
          attacks: 2, bs: 3, strength: 8, ap: -1, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 3
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Repulsor Executioner defensive array",
          attacks: 10, bs: 3, strength: 4, ap: 0, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin heavy bolter",
          attacks: 3, bs: 3, strength: 5, ap: -1, damage: 2, sustained: true, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin Icarus ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 2, twinlinked: true
        })
      })
    ],
  }),
  "Repulsor Executioner (ranged, plasma)": new Attacker({
    name: "Repulsor Executioner (ranged, plasma)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Macro plasma incinerator – supercharge",
          attacks: 5, bs: 3, strength: 9, ap: -4, damage: 3, heavy: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Heavy onslaught gatling cannon",
          attacks: 12, bs: 3, strength: 6, ap: 0, damage: 1, devastating: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Icarus rocket pod",
          attacks: 2, bs: 3, strength: 8, ap: -1, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 3
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Repulsor Executioner defensive array",
          attacks: 10, bs: 3, strength: 4, ap: 0, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin heavy bolter",
          attacks: 3, bs: 3, strength: 5, ap: -1, damage: 2, sustained: true, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin Icarus ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 2, twinlinked: true
        })
      })
    ],
  }),
  "Repulsor Executioner (ranged, onlyplasma)": new Attacker({
    name: "Repulsor Executioner (ranged, onlyplasma)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Macro plasma incinerator – supercharge",
          attacks: 5, bs: 3, strength: 9, ap: -4, damage: 3, heavy: true
        })
      })
    ],
  }),
  "Repulsor Executioner (ranged, onlyLaser)": new Attacker({
    name: "Repulsor Executioner (ranged, onlyLaser)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Heavy laser destroyer",
          attacks: 2, bs: 3, strength: 16, ap: -4, damage: 7, heavy: true
        })
      })
    ],
  }),
  "Repulsor Executioner (ranged, onlyRandom)": new Attacker({
    name: "Repulsor Executioner (ranged, onlyRandom)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Heavy onslaught gatling cannon",
          attacks: 12, bs: 3, strength: 6, ap: 0, damage: 1, devastating: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Icarus rocket pod",
          attacks: 2, bs: 3, strength: 8, ap: -1, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 3
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Repulsor Executioner defensive array",
          attacks: 10, bs: 3, strength: 4, ap: 0, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin heavy bolter",
          attacks: 3, bs: 3, strength: 5, ap: -1, damage: 2, sustained: true, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin Icarus ironhail heavy stubber",
          attacks: 3, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 2, twinlinked: true
        })
      })
    ],
  }),
  "Ballistus dreadnought (ranged)": new Attacker({
    name: "Ballistus dreadnought (ranged)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Ballistus missile launcher – krak",
          attacks: 2, bs: 3, strength: 10, ap: -2, damage: 4
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Ballistus lascannon",
          attacks: 2, bs: 3, strength: 12, ap: -3, damage: 5
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Twin storm bolter",
          attacks: 2, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 2, twinlinked: true
        })
      })
    ],
  }),

  "Bladeguard squad (3, melee)": new Attacker({
    name: "Bladeguard squad (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 4, bs: 3, strength: 5, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Bladeguard squad (6, melee)": new Attacker({
    name: "Bladeguard squad (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 4, bs: 3, strength: 5, ap: -2, damage: 2
        })
      })
    ],
  }),

  "Calgar & Bladeguard squad (3, melee)": new Attacker({
    name: "Calgar & Bladeguard squad (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 4, bs: 3, strength: 5, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Gauntlets of Ultramar",
          attacks: 6, bs: 2, strength: 8, ap: -3, damage: 3, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Victrix power sword",
          attacks: 5, bs: 2, strength: 5, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Calgar & Bladeguard squad (6, melee)": new Attacker({
    name: "Calgar & Bladeguard squad (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 4, bs: 3, strength: 5, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Gauntlets of Ultramar",
          attacks: 6, bs: 2, strength: 8, ap: -3, damage: 3, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Victrix power sword",
          attacks: 5, bs: 2, strength: 5, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Calgar (melee)": new Attacker({
    name: "Calgar (melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Gauntlets of Ultramar",
          attacks: 6, bs: 2, strength: 8, ap: -3, damage: 3, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Victrix power sword",
          attacks: 5, bs: 2, strength: 5, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Aggressor Squad (3, ranged)": new Attacker({
    name: "Aggressor Squad (3, ranged)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Auto boltstorm gauntlets",
          attacks: 3, bs: 3, strength: 4, ap: -1, damage: 1, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Fragstorm grenade launcher",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1
        })
      })
    ]
  }),
  "Aggressor Squad (6, ranged)": new Attacker({
    name: "Agressor Squad (6, ranged)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Auto boltstorm gauntlets",
          attacks: 3, bs: 3, strength: 4, ap: -1, damage: 1, twinlinked: true
        })
      }),
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Fragstorm grenade launcher",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1
        })
      })
    ]
  }),
  "Aggressor Squad + Biologis (6+1, ranged)": new Attacker({
    name: "Aggressor Squad + Biologis (6+1, ranged)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Auto boltstorm gauntlets",
          attacks: 3, bs: 3, strength: 4, ap: -1, damage: 1, twinlinked: true, lethal: true
        })
      }),
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Fragstorm grenade launcher",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Absolvor bolt pistol",
          attacks: 1, bs: 3, strength: 5, ap: -2, damage: 2, lethal: true
        })
      }),
    ]
  }),
  "Aggressor Squad + Biologis (3+1, ranged)": new Attacker({
    name: "Aggressor Squad + Biologis (3+1, ranged)",
    modelCount: 4,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Auto boltstorm gauntlets",
          attacks: 3, bs: 3, strength: 4, ap: -1, damage: 1, twinlinked: true, lethal: true
        })
      }),
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Fragstorm grenade launcher",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Absolvor bolt pistol",
          attacks: 1, bs: 3, strength: 5, ap: -2, damage: 2, lethal: true
        })
      }),
    ]
  }),


  "Aggressor Squad (3, melee)": new Attacker({
    name: "Aggressor Squad (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Twin power fists",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, twinlinked: true
        })
      })
    ]
  }),
  "Aggressor Squad (6, melee)": new Attacker({
    name: "Agressor Squad (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Twin power fists",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, twinlinked: true
        })
      })
    ]
  }),
  "Aggressor Squad + Biologis (6+1, melee)": new Attacker({
    name: "Aggressor Squad + Biologis (6+1, melee)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Twin power fists",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, twinlinked: true, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Absolvor bolt pistol",
          attacks: 4, bs: 3, strength: 4, ap: 0, damage: 1, lethal: true
        })
      }),
    ]
  }),
  "Aggressor Squad + Biologis (3+1, melee)": new Attacker({
    name: "Aggressor Squad + Biologis (3+1, melee)",
    modelCount: 4,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Twin power fists",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, twinlinked: true, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Absolvor bolt pistol",
          attacks: 4, bs: 3, strength: 4, ap: 0, damage: 1, lethal: true
        })
      }),
    ]
  }),

  "Guilliman (melee, Emperor’s Sword)": new Attacker({
    name: "Guilliman (melee, Emperor’s Sword)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Emperor’s Sword",
          attacks: 14, bs: 2, strength: 8, ap: -3, damage: 2, devastating: true
        })
      })
    ]
  }),

  "Guilliman (melee, Hand of Dominion)": new Attacker({
    name: "Guilliman (melee, Hand of Dominion)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Hand of Dominion",
          attacks: 7, bs: 2, strength: 14, ap: -4, damage: 4, lethal: true
        })
      })
    ]
  }),


  "Guilliman (range)": new Attacker({
    name: "Guilliman (range)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Hand of Dominion",
          attacks: 2, bs: 2, strength: 6, ap: -2, damage: 2, rapidFireX: 2
        })
      })
    ]
  }),

  "Assault Intercessor Squad with jump pack (5, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1,
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack (10, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1,
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack (5, melee, liberator, charge)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (5, melee, liberator, charge)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1,
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack (10, melee, liberator, charge)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (10, melee, liberator, charge)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, 
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, 
        })
      })
    ]
  }),

  "Bladeguard squad (3, melee, liberator)": new Attacker({
    name: "Bladeguard squad (3, melee, liberator)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Bladeguard squad (6, melee, liberator)": new Attacker({
    name: "Bladeguard squad (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad (5, melee, liberator)": new Attacker({
    name: "Terminator squad (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad (5, melee)": new Attacker({
    name: "Terminator squad (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2
        })
      })
    ],
  }),

  "Sanguinary guard (3, melee, liberator)": new Attacker({
    name: "Sanguinary guard (3, melee, liberator)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 3, strength: 8, ap: -3, damage: 2
        })
      })
    ],
  }),
  "Sanguinary guard (6, melee, liberator)": new Attacker({
    name: "Sanguinary guard (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 3, strength: 8, ap: -3, damage: 2
        })
      })
    ],
  }),
  "Sanguinary guard (6, melee)": new Attacker({
    name: "Sanguinary guard (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 4, bs: 3, strength: 6, ap: -3, damage: 2
        })
      })
    ],
  }),
  "Terminator squad & Captain (5, melee, liberator)": new Attacker({
    name: "Terminator squad & Captain (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2
        }),
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Relic fist",
          attacks: 6, bs: 2, strength: 10, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad & Captain (5, melee)": new Attacker({
    name: "Terminator squad & Captain (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Relic fist",
          attacks: 5, bs: 2, strength: 8, ap: -2, damage: 2
        })
      })
    ],
  }),

};

export default bloodAngelOther;
