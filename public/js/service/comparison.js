// services/comparison.js – összehasonlító futtatás 5 defender ellen (pure + calcTotals)
import { calcTotals } from './damage.js';

export function run({ Attacker, Defender }, mounts, phase, defenderEntries) {
  const attacker = new Attacker({
    name: 'Preset/Manual',
    rangedMounts: phase === 'ranged' ? mounts : [],
    meleeMounts:  phase === 'melee'  ? mounts : []
  });
  const weaponsForPhase = attacker.getWeapons(phase);

  return defenderEntries.map(([key, d]) => {
    const res = calcTotals(weaponsForPhase, new Defender(d));
    return {
      key,
      hits:   res.roundedHits ?? 0,
      wounds: res.roundedWounds ?? 0,
      failed: res.roundedFailedSaves ?? 0,
      damage: res.roundedDamage ?? 0,
    };
  });
}
