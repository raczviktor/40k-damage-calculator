import Attacker from './model/Attacker.js';
import Defender from './model/Defender.js';
import Weapon from './model/Weapon.js';
import DamageCalculator from './DamageCalculator.js';
import attackerPreset from './data/attackerPreset.js';
import defenderPreset from './data/defenderPreset.js';

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

//preset attacker list
const presetAttackerSelect = document.getElementById('presetAttacker');

Object.keys(attackerPreset).forEach(key => {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = key;
  presetAttackerSelect.appendChild(option);
});

// preset attacker
document.getElementById('presetAttacker').addEventListener('change', (e) => {
  const preset = attackerPreset[e.target.value];
  if (!preset) return;

  weaponsContainer.innerHTML = ''; // előző fegyverek törlése

  preset.weapons.forEach((w, index) => {
    const newWeapon = weaponTemplate.cloneNode(true);

    newWeapon.querySelector('.attacks').value = w.attacks;
    newWeapon.querySelector('.bs').value = w.bs;
    newWeapon.querySelector('.strength').value = w.strength;
    newWeapon.querySelector('.ap').value = w.ap;
    newWeapon.querySelector('.damage').value = w.damage;
    newWeapon.querySelector('.lethal').checked = w.lethal;
    newWeapon.querySelector('.sustained').checked = w.sustained;

    // Hozzáadjuk az eltávolítás gomb eseményét
    const removeBtn = newWeapon.querySelector('.remove-weapon');
    removeBtn.addEventListener('click', () => {
      newWeapon.remove();
    });

    weaponsContainer.appendChild(newWeapon);
  });
});

// preset defender list
const presetDefenderSelect = document.getElementById('presetDefender');
Object.keys(defenderPreset).forEach(key => {
  const option = document.createElement('option');
  option.value = key;
  // Ha szebben akarod: nagybetűs első karakter vagy más név:
  option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  presetDefenderSelect.appendChild(option);
});

//preset defender
document.getElementById('presetDefender').addEventListener('change', (e) => {
  const preset = defenderPreset[e.target.value];
  if (!preset) return;

  document.getElementById('toughness').value = preset.toughness;
  document.getElementById('save').value = preset.save;
  document.getElementById('invuln').value = preset.invuln;
});
