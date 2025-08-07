import Attacker from './model/Attacker.js';
import Defender from './model/Defender.js';
import Weapon from './model/Weapon.js';
import DamageCalculator from './DamageCalculator.js';

const weaponsContainer = document.getElementById('weapons-container');
const addWeaponBtn = document.getElementById('add-weapon');
const weaponTemplate = document.getElementById('weapon-template').firstElementChild;

function collectWeapons() {
  const weapons = [];
  const weaponDivs = weaponsContainer.querySelectorAll('.weapon');
  weaponDivs.forEach(div => {
    weapons.push(new Weapon({
      attacks: +div.querySelector('.attacks').value,
      bs: +div.querySelector('.bs').value,
      strength: +div.querySelector('.strength').value,
      ap: +div.querySelector('.ap').value,
      damage: +div.querySelector('.damage').value,
      lethal: div.querySelector('.lethal').checked,
      sustained: div.querySelector('.sustained').checked,
      // Feltételezem, hogy reroll mezők már nem egyenként, hanem globalban lesznek (ha nem, hozzá kell adni)
      rerollHit: document.getElementById('rerollHit').value,
      rerollWound: document.getElementById('rerollWound').value
    }));
  });
  return weapons;
}

// Fegyver hozzáadás eseménykezelője
addWeaponBtn.addEventListener('click', () => {
  const newWeapon = weaponTemplate.cloneNode(true);
  // Csatoljuk az eltávolító gomb eseményét
  const removeBtn = newWeapon.querySelector('.remove-weapon');
  removeBtn.addEventListener('click', () => {
    newWeapon.remove();
  });
  weaponsContainer.appendChild(newWeapon);
});

// Számítás eseménykezelője
document.getElementById('calc').addEventListener('click', () => {
  const weapons = collectWeapons();

  const attacker = new Attacker({
    weapons: weapons
  });

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
