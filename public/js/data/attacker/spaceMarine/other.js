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
  "Bladeguard squad with Bladeguard Ancient (3, melee, liberator, doh on)": new Attacker({
    name: "Bladeguard squad with Bladeguard Ancient (3, melee, liberator)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 6, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Close combat weapon",
          attacks: 7, bs: 2, strength: 6, ap: 0, damage: 1
        })
      })
    ],
  }),
  "Bladeguard squad with Bladeguard Ancient (6, melee, liberator, doh on)": new Attacker({
    name: "Bladeguard squad with Bladeguard Ancient (6, melee, liberator)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 6, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Close combat weapon",
          attacks: 7, bs: 2, strength: 6, ap: 0, damage: 1
        })
      })
    ],
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
  "Bladeguard squad with Captain (3, melee, liberator, deva on)": new Attacker({
    name: "Bladeguard squad with Captain (3, melee, liberator, deva on)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 10, bs: 2, strength: 7, ap: -2, damage: 2, devastating: true
        })
      })
    ],
  }),
  "Bladeguard squad with Captain (6, melee, liberator, deva on)": new Attacker({
    name: "Bladeguard squad with Captain  (6, melee, liberator, deva on)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 10, bs: 2, strength: 7, ap: -2, damage: 2, devastating: true
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
"Sanguinary guard with captain with jump pack (3, melee, liberator)": new Attacker({
    name: "Sanguinary guard captain with jump pack (3, melee, liberator)",
    modelCount: 4,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 3, strength: 9, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 11, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Sanguinary guard with captain with jump pack (6, melee, liberator)": new Attacker({
    name: "Sanguinary guard captain with jump pack (6, melee, liberator)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 3, strength: 9, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 11, ap: -2, damage: 2
        })
      })
    ],
  }),

  "Sanguinary guard (3, melee)": new Attacker({
    name: "Sanguinary guard (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 4, bs: 3, strength: 6, ap: -3, damage: 2
        })
      })
    ],
  }),
  "Sanguinary guard with Dante (3, melee)": new Attacker({
    name: "Sanguinary guard with Dante (3, melee)",
    modelCount: 4,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 4, bs: 2, strength: 6, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 8, bs: 2, strength: 8, ap: -3, damage: 2, lethal: true
        })
      })
    ],
  }),
  "Sanguinary guard with Dante (3, melee, liberator)": new Attacker({
    name: "Sanguinary guard with Dante (3, melee, liberator)",
    modelCount: 4,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 2, strength: 8, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 9, bs: 2, strength: 10, ap: -3, damage: 2, lethal: true
        })
      })
    ],
  }),
  "Sanguinary guard with Dante (6, melee)": new Attacker({
    name: "Sanguinary guard with Dante (6, melee)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 4, bs: 2, strength: 6, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 8, bs: 2, strength: 8, ap: -3, damage: 2, lethal: true
        })
      })
    ],
  }),
  "Sanguinary guard with Dante (6, melee, liberator)": new Attacker({
    name: "Sanguinary guard with Dante (6, melee, liberator)",
    modelCount: 7,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Encarmine blade",
          attacks: 5, bs: 2, strength: 8, ap: -3, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 9, bs: 2, strength: 10, ap: -3, damage: 2, lethal: true
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
  // BladeGuard variants
  "Bladeguard squad with Chaplain (6, melee)": new Attacker({
    name: "Bladeguard squad with Chaplain (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 4, bs: 3, strength: 5, ap: -2, damage: 2, plusOneToWound: true,
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 2, plusOneToWound: true,
        })
      })
    ],
  }),
  "Bladeguard squad with Chaplain (6, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Chaplain (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2, plusOneToWound: true,
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 8, ap: -1, damage: 2, plusOneToWound: true,
        })
      })
    ],
  }),
  "Bladeguard squad with Chaplain (3, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Chaplain (3, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2, plusOneToWound: true,
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 8, ap: -1, damage: 2, plusOneToWound: true,
        })
      })
    ],
  }),

  "Bladeguard squad with Judiciar (6, melee)": new Attacker({
    name: "Bladeguard squad with Judiciar (6, melee)",
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
          name: "Executioner relic blade",
          attacks: 5, bs: 2, strength: 7, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Bladeguard squad with Judiciar (6, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Judiciar (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Executioner relic blade",
          attacks: 6, bs: 2, strength: 9, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Bladeguard squad with Judiciar (3, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Judiciar (3, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Executioner relic blade",
          attacks: 6, bs: 2, strength: 9, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Bladeguard squad with Lieutenant (3, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Lieutenant (3, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Executioner relic blade",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, lethal: true
        })
      })
    ],
  }),
  "Bladeguard squad with Lieutenant (6, melee, liberator)": new Attacker({
    name: "Bladeguard squad with Lieutenant (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Master-crafted power weapon",
          attacks: 5, bs: 3, strength: 7, ap: -2, damage: 2, lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Executioner relic blade",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, lethal: true
        })
      })
    ],
  }),
  "Assault Intercessor Squad with chaplain (6, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with chaplain (6, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 8, ap: -1, damage: 2, plusOneToWound: true,
        })
      })
    ]
  }),
  "Assault Intercessor Squad with lieutenant (6, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with lieutenant (6, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollWound: '1s', lethal: true
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollWound: '1s', lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, lethal: true,
        })
      })
    ]
  }),
  // Baal pred
  "Baal predator (1, ranged, flamer)": new Attacker({
    name: "Baal predator (1, ranged, flamer)",
    modelCount: 1,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Baal flamestorm cannon",
          attacks: 7, bs: 1, strength: 6, ap: -2, damage: 2, ignoreCover: true, torrent: true, 
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Hunter-killer missile",
          attacks: 1, bs: 2, strength: 14, ap: -3, damage: 4
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Storm bolter",
          attacks: 2, bs: 3, strength: 4, ap: 0, damage: 1, rapidFireX: 2,
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Heavy flamer",
          attacks: 4, bs: 1, strength: 5, ap: -1, damage: 1, ignoreCover: true, torrent: true, 
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
  "Assault Intercessor Squad with jump pack (10, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (10, melee, liberator)",
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
  "Assault Intercessor Squad with jump pack (5, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack (5, melee, liberator)",
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
  "Assault Intercessor Squad with jump pack with captain with jump pack (10, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with captain with jump pack (10, melee)",
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
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 8, ap: -2, damage: 2
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with captain with jump pack (5, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with captain with jump pack (5, melee)",
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
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 8, ap: -2, damage: 2
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with captain with jump pack (10, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with captain with jump pack (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 11, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 1,
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 11, ap: -2, damage: 2
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with captain with jump pack (5, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with captain with jump pack (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 11, ap: -2, damage: 2,
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 1,
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 11, ap: -2, damage: 2
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with chaplain with jump pack (10, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with chaplain with jump pack (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with chaplain with jump pack (5, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with chaplain with jump pack (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with chaplain with jump pack (10, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with chaplain with jump pack (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with chaplain with jump pack (5, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with chaplain with jump pack (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with commander dante (10, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with commander dante (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 2, strength: 8, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 2, strength: 4, ap: -1, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 8, bs: 2, strength: 8, ap: -3, damage: 2, lethal: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with commander dante (5, melee)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with commander dante (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 2, strength: 8, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 2, strength: 4, ap: -1, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 8, bs: 2, strength: 8, ap: -3, damage: 2, lethal: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with commander dante (10, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with commander dante (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 2, strength: 10, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 9,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 9, bs: 2, strength: 10, ap: -3, damage: 2, lethal: true
        })
      })
    ]
  }),
  "Assault Intercessor Squad with jump pack with commander dante (5, melee, liberator)": new Attacker({
    name: "Assault Intercessor Squad with jump pack with commander dante (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 2, strength: 10, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 4,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "The Axe Mortalis",
          attacks: 9, bs: 2, strength: 10, ap: -3, damage: 2, lethal: true
        })
      })
    ]
  }),
  //Outrider 
  "Outrider squad (6, melee)": new Attacker({
    name: "Outrider squad (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1
        })
      }),
    ]
  }),
  "Outrider squad (3, melee)": new Attacker({
    name: "Outrider squad (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1
        })
      }),
    ]
  }),
  "Outrider squad (6, melee, liberator)": new Attacker({
    name: "Outrider squad (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 2
        })
      }),
    ]
  }),
  "Outrider squad (3, melee, liberator)": new Attacker({
    name: "Outrider squad (3, melee, liberator)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 2
        })
      }),
    ]
  }),
  "Outrider squad with chaplain on bike (6, melee)": new Attacker({
    name: "Outrider squad with chaplain on bike (6, melee)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 2, plusOneToWound: true
        })
      }),
    ]
  }),
  "Outrider squad with chaplain on bike (3, melee)": new Attacker({
    name: "Outrider squad with chaplain on bike (3, melee)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 2, plusOneToWound: true
        })
      }),
    ]
  }),
  "Outrider squad with chaplain on bike (6, melee, liberator)": new Attacker({
    name: "Outrider squad with chaplain on bike (6, melee, liberator)",
    modelCount: 6,
    rangedMounts: [
      new WeaponMount({
        count: 6,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 9, ap: -1, damage: 3, plusOneToWound: true
        })
      }),
    ]
  }),
  "Outrider squad with chaplain on bike (3, melee, liberator)": new Attacker({
    name: "Outrider squad with chaplain on bike (3, melee, liberator)",
    modelCount: 3,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 7, ap: -1, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 9, ap: -1, damage: 3, plusOneToWound: true
        })
      }),
    ]
  }),
  //DEATH COMPANY SQUAD WITH JUMP PACK
  "Death company marines with jump packs (10, melee)": new Attacker({
    name: "Death company marines with jump packs (10, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all'
        })
      }),
    ],
  }),
  "Death company marines with jump packs (5, melee)": new Attacker({
    name: "Death company marines with jump packs (5, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all'
        })
      }),
    ],
  }),
  "Death company marines with jump packs (10, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs (10, melee, liberator)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all'
        })
      })
    ],
  }),
  "Death company marines with jump packs (5, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all'
        })
      })
    ],
  }),
  "Death company marines with jump packs with chaplain with jump pack (10, melee)": new Attacker({
    name: "Death company marines with jump packs with chaplain with jump pack (10, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist 1",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with chaplain with jump pack (5, melee)": new Attacker({
    name: "Death company marines with jump packs with chaplain with jump pack (5, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with chaplain with jump pack (10, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with chaplain with jump pack (10, melee, liberator)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with chaplain with jump pack (5, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with chaplain with jump pack (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2, rerollHit: 'all', plusOneToWound: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with astorath (10, melee)": new Attacker({
    name: "Death company marines with jump packs with astorath (10, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Executioner’s Axe",
          attacks: 6, bs: 2, strength: 7, ap: -3, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with astorath (5, melee)": new Attacker({
    name: "Death company marines with jump packs with astorath (5, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Executioner’s Axe",
          attacks: 6, bs: 2, strength: 7, ap: -3, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with astorath (10, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with astorath (10, melee, liberator)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Executioner’s Axe",
          attacks: 7, bs: 2, strength: 9, ap: -3, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with astorath (5, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with astorath (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', devastating: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Executioner’s Axe",
          attacks: 7, bs: 2, strength: 9, ap: -3, damage: 2, rerollHit: 'all', devastating: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with death company captain with jump pack (10, melee)": new Attacker({
    name: "Death company marines with jump packs with death company captain with jump pack (10, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 8, ap: -3, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
    ],
  }),
  "Death company marines with jump packs with death company captain with jump pack (5, melee)": new Attacker({
    name: "Death company marines with jump packs with death company captain with jump pack (5, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 5, bs: 2, strength: 8, ap: -3, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
    ],
  }),
  "Death company marines with jump packs with death company captain with jump pack (10, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with death company captain with jump pack (10, melee, liberator)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 10, ap: -3, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
    ],
  }),
  "Death company marines with jump packs with death company captain with jump pack (5, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with death company captain with jump pack (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', sustained: 1
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "Power fist",
          attacks: 6, bs: 2, strength: 10, ap: -3, damage: 2, rerollHit: 'all', sustained: 1
        })
      }),
    ],
  }),
  "Death company marines with jump packs with lemartes (10, melee)": new Attacker({
    name: "Death company marines with jump packs with lemartes (10, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all'
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Blood Crozius",
          attacks: 5, bs: 2, strength: 6, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with lemartes (5, melee)": new Attacker({
    name: "Death company marines with jump packs with lemartes (5, melee)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 3, bs: 4, strength: 7, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 4, bs: 3, strength: 4, ap: -1, damage: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Blood Crozius",
          attacks: 5, bs: 2, strength: 6, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with lemartes (10, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with lemartes (10, melee, liberator)",
    modelCount: 11,
    rangedMounts: [
      new WeaponMount({
        count: 3,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Blood Crozius",
          attacks: 6, bs: 2, strength: 8, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
    ],
  }),
  "Death company marines with jump packs with lemartes (5, melee, liberator)": new Attacker({
    name: "Death company marines with jump packs with lemartes (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Eviscerator",
          attacks: 4, bs: 4, strength: 9, ap: -2, damage: 2, sustained: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 2,
        weapon: new Weapon({
          name: "Astartes chainsword",
          attacks: 5, bs: 3, strength: 6, ap: -1, damage: 1, rerollHit: 'all', lethal: true
        })
      }),
      new WeaponMount({
        count: 1  ,
        weapon: new Weapon({
          name: "The Blood Crozius",
          attacks: 6, bs: 2, strength: 8, ap: -2, damage: 2, rerollHit: 'all', lethal: true
        })
      }),
    ],
  }),
// Terminator
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
  "Terminator squad (10, melee)": new Attacker({
    name: "Terminator squad (10, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2
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
  "Terminator squad (10, melee, liberator)": new Attacker({
    name: "Terminator squad (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad with ancient in terminator armour (5, melee)": new Attacker({
    name: "Terminator squad with ancient in terminator armour (5, melee)",
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
          name: "Powerfist",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad with ancient in terminator armour (10, melee)": new Attacker({
    name: "Terminator squad with ancient in terminator armour (10, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 2, strength: 8, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad with ancient in terminator armour (5, melee, liberator)": new Attacker({
    name: "Terminator squad with ancient in terminator armour (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad with ancient in terminator armour (10, melee, liberator)": new Attacker({
    name: "Terminator squad with ancient in terminator armour (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 5, bs: 2, strength: 10, ap: -2, damage: 2
        })
      })
    ],
  }),
  "Terminator squad with Captain in terminator armour (5, melee)": new Attacker({
    name: "Terminator squad with Captain in terminator armour (5, melee)",
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
  "Terminator squad with Captain in terminator armour (10, melee)": new Attacker({
    name: "Terminator squad with Captain in terminator armour (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
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
  "Terminator squad with Captain in terminator armour (5, melee, liberator)": new Attacker({
    name: "Terminator squad with Captain in terminator armour (5, melee, liberator)",
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
  "Terminator squad with Captain in terminator armour (10, melee, liberator)": new Attacker({
    name: "Terminator squad with Captain in terminator armour (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
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
  "Terminator squad with Chaplain in terminator armour (5, melee)": new Attacker({
    name: "Terminator squad with Chaplain in terminator armour (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 2, plusOneToWound: true
        })
      })
    ],
  }),
  "Terminator squad with Chaplain in terminator armour (10, melee)": new Attacker({
    name: "Terminator squad with Chaplain in terminator armour (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, plusOneToWound: true
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 5, bs: 2, strength: 6, ap: -1, damage: 2, plusOneToWound: true
        })
      })
    ],
  }),
  "Terminator squad with Chaplain in terminator armour (5, melee, liberator)": new Attacker({
    name: "Terminator squad with Chaplain in terminator armour (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        }),
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 8, ap: -1, damage: 2, plusOneToWound: true
        })
      })
    ],
  }),
  "Terminator squad with Chaplain in terminator armour (10, melee, liberator)": new Attacker({
    name: "Terminator squad with Chaplain in terminator armour (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, plusOneToWound: true
        }),
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Crozius arcanum",
          attacks: 6, bs: 2, strength: 8, ap: -1, damage: 2, plusOneToWound: true
        })
      })
    ],
  }),
  "Terminator squad with Librarian in terminator armour (5, melee)": new Attacker({
    name: "Terminator squad with Librarian in terminator armour (5, melee)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, sustained: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Force weapon",
          attacks: 4, bs: 3, strength: 6, ap: -1, damage: 2, sustained: 1
        })
      })
    ],
  }),
  "Terminator squad with Librarian in terminator armour (10, melee)": new Attacker({
    name: "Terminator squad with Librarian in terminator armour (10, melee)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 3, bs: 3, strength: 8, ap: -2, damage: 2, sustained: 1
        })
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Force weapon",
          attacks: 4, bs: 3, strength: 6, ap: -1, damage: 2, sustained: 1
        })
      })
    ],
  }),
  "Terminator squad with Librarian in terminator armour (5, melee, liberator)": new Attacker({
    name: "Terminator squad with Librarian in terminator armour (5, melee, liberator)",
    modelCount: 5,
    rangedMounts: [
      new WeaponMount({
        count: 5,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, sustained: 1
        }),
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Force weapon",
          attacks: 5, bs: 3, strength: 8, ap: -1, damage: 2, sustained: 1
        })
      })
    ],
  }),
  "Terminator squad with Librarian in terminator armour (10, melee, liberator)": new Attacker({
    name: "Terminator squad with Librarian in terminator armour (10, melee, liberator)",
    modelCount: 10,
    rangedMounts: [
      new WeaponMount({
        count: 10,
        weapon: new Weapon({
          name: "Powerfist",
          attacks: 4, bs: 3, strength: 10, ap: -2, damage: 2, sustained: 1
        }),
      }),
      new WeaponMount({
        count: 1,
        weapon: new Weapon({
          name: "Force weapon",
          attacks: 5, bs: 3, strength: 8, ap: -1, damage: 2, sustained: 1
        })
      })
    ],
  }),
  















};

export default bloodAngelOther;
