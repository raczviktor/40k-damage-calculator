// service/comparison.js
import { calcTotals } from './damage.js';

export function run({ Attacker, Defender }, mounts, phase, defenderEntries) {
  const attacker = new Attacker({
    name: 'Preset',
    rangedMounts: phase === 'ranged' ? mounts : [],
    meleeMounts:  phase === 'melee'  ? mounts : []
  });
  const weapons = attacker.getWeapons(phase);

  return defenderEntries.map(([key, defData]) => {
    // FONTOS: defData-ben benne van a woundsPerModel is a defenderPresetből
    const defender = new Defender(defData);
    const res = calcTotals(weapons, defender);
    return {
      key,
      hits:   res.roundedHits,
      wounds: res.roundedWounds,
      failed: res.roundedFailedSaves,
      damage: res.roundedDamage
    };
  });
}
