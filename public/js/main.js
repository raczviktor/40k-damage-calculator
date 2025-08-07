import Attacker from './model/Attacker.js';
import Defender from './model/Defender.js';
import Weapon from './model/Weapon.js';
import DamageCalculator from './DamageCalculator.js';

document.getElementById('calc').addEventListener('click', () => {
  // Fegyver példány létrehozása a mezők alapján
  const weapon = new Weapon({
    attacks: +document.getElementById('attacks').value,  // shots helyett attacks
    bs: +document.getElementById('bs').value,
    strength: +document.getElementById('strength').value,
    ap: +document.getElementById('ap').value,
    damage: +document.getElementById('damage').value,
    lethal: document.getElementById('lethal').checked,
    sustained: document.getElementById('sustained').checked,
    rerollHit: document.getElementById('rerollHit').value,
    rerollWound: document.getElementById('rerollWound').value
  });

  // Attacker létrehozása egy vagy több fegyverrel (itt csak egy)
  const attacker = new Attacker({
    weapons: [weapon]
  });

  // Defender létrehozása
  const defender = new Defender({
    toughness: +document.getElementById('toughness').value,
    save: +document.getElementById('save').value,
    invuln: +document.getElementById('invuln').value
  });

  const calculator = new DamageCalculator(attacker, defender);
  const result = calculator.calculateTotal();

  document.getElementById('result').innerHTML = `
    🎯 <b>Átlagos sebzés:</b> ${result.avgDamage.toFixed(2)}<br>
    🧱 <b>Realisztikus sebzéslépcső:</b> ${result.realisticDamage}<br>
    🎲 <b>Találatok:</b> ${result.totalHits.toFixed(2)}<br>
    💀 <b>Sebző találatok:</b> ${result.totalWounds.toFixed(2)}<br>
    🛡️ <b>Átmentett mentések után:</b> ${result.failedSaves.toFixed(2)}
  `;
});
