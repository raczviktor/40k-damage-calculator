// js/main.js
import Attacker from './model/Attacker.js';
import Defender from './model/Defender.js';
import Weapon from './model/Weapon.js';
import DamageCalculator from './DamageCalculator.js';
import attackerPreset from './data/attackerPreset.js';
import defenderPreset from './data/defenderPreset.js';

const weaponsContainer = document.getElementById('weapons-container');
const addWeaponBtn = document.getElementById('add-weapon');
const weaponTemplate = document.getElementById('weapon-template').firstElementChild;

// Egy .weapon DOM-blokkból Weapon példány
function weaponFromDiv(div) {
  return new Weapon({
    attacks: +div.querySelector('.attacks').value,
    bs: +div.querySelector('.bs').value,
    strength: +div.querySelector('.strength').value,
    ap: +div.querySelector('.ap').value,
    damage: +div.querySelector('.damage').value,

    lethal: div.querySelector('.lethal')?.checked || false,
    sustained: +div.querySelector('.sustained')?.value || 0, // <-- szám
    devastating: div.querySelector('.devastating')?.checked || false,
    twinlinked: div.querySelector('.twinlinked')?.checked || false,

    rapidFireX: +div.querySelector('.rapidFireX')?.value || 0,
    withinHalfRange: div.querySelector('.withinHalfRange')?.checked || false,

    // Fegyverenkénti reroll selectek (ha hiányoznak a DOM-ból, 'none'-ra esik)
    rerollHit: div.querySelector('.rerollHit')?.value || 'none',
    rerollWound: div.querySelector('.rerollWound')?.value || 'none'
  });
}

function collectWeapons() {
  return Array.from(weaponsContainer.querySelectorAll('.weapon')).map(weaponFromDiv);
}

// Új fegyver felvétele a template-ből, opcionális init adatokkal (preset)
function addWeaponFromTemplate(initial = null) {
  const row = weaponTemplate.cloneNode(true);

  // Alap értékek / preset betöltése
  const setVal = (sel, val) => { const el = row.querySelector(sel); if (el != null) el.value = val; };
  const setChk = (sel, val) => { const el = row.querySelector(sel); if (el != null) el.checked = !!val; };

  if (initial) {
    setVal('.attacks', initial.attacks ?? 10);
    setVal('.bs', initial.bs ?? 3);
    setVal('.strength', initial.strength ?? 4);
    setVal('.ap', initial.ap ?? -1);
    setVal('.damage', initial.damage ?? 1);

    setChk('.lethal', initial.lethal);
    setVal('.sustained', initial.sustained ?? 0); // <-- szám mező, nem checkbox
    setChk('.devastating', initial.devastating);
    setChk('.twinlinked', initial.twinlinked);

    setVal('.rapidFireX', initial.rapidFireX ?? 0);
    setChk('.withinHalfRange', initial.withinHalfRange);

    setVal('.rerollHit', initial.rerollHit ?? 'none');
    setVal('.rerollWound', initial.rerollWound ?? 'none');
  }

  // Eltávolítás
  const removeBtn = row.querySelector('.remove-weapon');
  if (removeBtn) removeBtn.addEventListener('click', () => row.remove());

  weaponsContainer.appendChild(row);
}

// Hozzáadás gomb
addWeaponBtn.addEventListener('click', () => addWeaponFromTemplate());

// Számítás
document.getElementById('calc').addEventListener('click', () => {
  const attacker = new Attacker({ weapons: collectWeapons() });
  const defender = new Defender({
    toughness: +document.getElementById('toughness').value,
    save: +document.getElementById('save').value,
    invuln: +document.getElementById('invuln').value
  });

  const calc = new DamageCalculator(attacker, defender);
  const res = calc.calculateTotal();

  // Csak a valóságos (rounded*) értékeket mutatjuk
  document.getElementById('result').innerHTML = `
    🎲 <b>Találatok:</b> ${res.roundedHits}<br>
    💀 <b>Sebző találatok:</b> ${res.roundedWounds}<br>
    🛡️ <b>Mentő után:</b> ${res.roundedFailedSaves}<br>
    🎯 <b>Sebzés:</b> ${res.roundedDamage}
  `;
});

// Preset attacker lista feltöltése
const presetAttackerSelect = document.getElementById('presetAttacker');
Object.keys(attackerPreset).forEach(key => {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = key;
  presetAttackerSelect.appendChild(opt);
});

// Preset attacker betöltése
presetAttackerSelect.addEventListener('change', (e) => {
  const preset = attackerPreset[e.target.value];
  if (!preset) return;

  weaponsContainer.innerHTML = '';
  preset.weapons.forEach(w => addWeaponFromTemplate(w));
});

// Preset defender lista feltöltése
const presetDefenderSelect = document.getElementById('presetDefender');
Object.keys(defenderPreset).forEach(key => {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  presetDefenderSelect.appendChild(opt);
});

// Preset defender betöltése
presetDefenderSelect.addEventListener('change', (e) => {
  const preset = defenderPreset[e.target.value];
  if (!preset) return;

  document.getElementById('toughness').value = preset.toughness;
  document.getElementById('save').value = preset.save;
  document.getElementById('invuln').value = preset.invuln;
});
