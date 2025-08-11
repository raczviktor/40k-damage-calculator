import Attacker from './model/Attacker.js';
import Defender from './model/Defender.js';
import Weapon from './model/Weapon.js';
import WeaponMount from './model/WeaponMount.js'; // szükséges, mert használod
import DamageCalculator from './DamageCalculator.js';
import defenderPreset from './data/defenderPreset.js';
import attackerPreset from './data/attacker/index.js';

// --- DOM refs
const weaponsContainer = document.getElementById('weapons-container');
const addWeaponBtn = document.getElementById('add-weapon');
const weaponTemplate = document.getElementById('weapon-template')?.firstElementChild;
const phaseSelect = document.getElementById('phase');

// ---------- Helpers: DOM -> Weapon / Mount ----------
function weaponFromDiv(div) {
  const antiKeyword = div.querySelector('.antiKeyword')?.value || '';
  const antiX = +div.querySelector('.antiX')?.value || 0;

  return new Weapon({
    attacks: +div.querySelector('.attacks').value,
    bs: +div.querySelector('.bs').value,
    strength: +div.querySelector('.strength').value,
    ap: +div.querySelector('.ap').value,
    damage: +div.querySelector('.damage').value,

    lethal: div.querySelector('.lethal')?.checked || false,
    sustained: +div.querySelector('.sustained')?.value || 0,
    devastating: div.querySelector('.devastating')?.checked || false,
    twinlinked: div.querySelector('.twinlinked')?.checked || false,

    rapidFireX: +div.querySelector('.rapidFireX')?.value || 0,
    withinHalfRange: div.querySelector('.withinHalfRange')?.checked || false,

    rerollHit: div.querySelector('.rerollHit')?.value || 'none',
    rerollWound: div.querySelector('.rerollWound')?.value || 'none',

    ignoreCover: div.querySelector('.ignoreCover')?.checked || false,
    torrent: div.querySelector('.torrent')?.checked || false,
    lance: div.querySelector('.lance')?.checked || false,
    blast: div.querySelector('.blast')?.checked || false,
    meltaX: +div.querySelector('.meltaX')?.value || 0,
    heavy: div.querySelector('.heavy')?.checked || false,
    anti: (antiKeyword && antiX > 0) ? { keyword: antiKeyword, x: antiX } : null
  });
}

function mountFromDiv(div) {
  const weapon = weaponFromDiv(div);
  const count = Math.max(1, Math.floor(+div.querySelector('.count')?.value || 1));
  return new WeaponMount({ weapon, count });
}

function collectMounts() {
  return Array.from(weaponsContainer.querySelectorAll('.weapon')).map(mountFromDiv);
}

// ---------- Template klónozás ----------
function addWeaponFromTemplate(initialMount = null) {
  const row = weaponTemplate.cloneNode(true);

  const setVal = (sel, val) => { const el = row.querySelector(sel); if (el) el.value = val; };
  const setChk = (sel, val) => { const el = row.querySelector(sel); if (el) el.checked = !!val; };

  if (initialMount) {
    const w = initialMount.weapon;
    setVal('.count', initialMount.count ?? 1);

    setVal('.attacks', w.attacks ?? 10);
    setVal('.bs', w.bs ?? 3);
    setVal('.strength', w.strength ?? 4);
    setVal('.ap', w.ap ?? -1);
    setVal('.damage', w.damage ?? 1);

    setChk('.lethal', w.lethal);
    setVal('.sustained', w.sustained ?? 0);
    setChk('.devastating', w.devastating);
    setChk('.twinlinked', w.twinlinked);

    setVal('.rapidFireX', w.rapidFireX ?? 0);
    setChk('.withinHalfRange', w.withinHalfRange);

    setVal('.rerollHit', w.rerollHit ?? 'none');
    setVal('.rerollWound', w.rerollWound ?? 'none');

    setChk('.ignoreCover', w.ignoreCover);
    setChk('.torrent', w.torrent);
    setChk('.lance', w.lance);
    setChk('.blast', w.blast);
    setVal('.meltaX', w.meltaX ?? 0);
    setChk('.heavy', w.heavy);

    if (w.anti?.keyword) setVal('.antiKeyword', w.anti.keyword);
    if (typeof w.anti?.x === 'number') setVal('.antiX', w.anti.x);
  }

  const removeBtn = row.querySelector('.remove-weapon');
  if (removeBtn) removeBtn.addEventListener('click', () => row.remove());

  weaponsContainer.appendChild(row);
}

// Új sor gomb
if (addWeaponBtn) addWeaponBtn.addEventListener('click', () => addWeaponFromTemplate());

// ---------- Számítás ----------
document.getElementById('calc').addEventListener('click', () => {
  const phase = (phaseSelect?.value === 'melee') ? 'melee' : 'ranged';
  const mounts = collectMounts();

  const attacker = new Attacker({
    name: 'Manual',
    rangedMounts: phase === 'ranged' ? mounts : [],
    meleeMounts:  phase === 'melee'  ? mounts : []
  });

  const defender = new Defender({
    toughness: +document.getElementById('toughness').value,
    save: +document.getElementById('save').value,
    invuln: +document.getElementById('invuln').value
  });

  const weaponsForPhase = attacker.getWeapons(phase);
  const calc = new DamageCalculator({ weapons: weaponsForPhase }, defender);
  const res = calc.calculateTotal();

  document.getElementById('result').innerHTML = `
    🎲 <b>Találatok:</b> ${res.roundedHits}<br>
    💀 <b>Sebző találatok:</b> ${res.roundedWounds}<br>
    🛡️ <b>Mentő után:</b> ${res.roundedFailedSaves}<br>
    🎯 <b>Sebzés:</b> ${res.roundedDamage}
  `;
});

// ---------- Preset listák (csak az új séma) ----------
const presetAttackerSelect = document.getElementById('presetAttacker');
if (presetAttackerSelect) {
  Object.keys(attackerPreset).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key;
    presetAttackerSelect.appendChild(opt);
  });

  presetAttackerSelect.addEventListener('change', (e) => {
    const preset = attackerPreset[e.target.value]; // Attacker példány az új sémával
    if (!preset) return;

    const phase = (phaseSelect?.value === 'melee') ? 'melee' : 'ranged';
    const srcMounts = phase === 'ranged' ? preset.ranged : preset.melee;

    weaponsContainer.innerHTML = '';
    (srcMounts || []).forEach(m => addWeaponFromTemplate(m));
  });
}

const presetDefenderSelect = document.getElementById('presetDefender');
if (presetDefenderSelect) {
  Object.keys(defenderPreset).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    presetDefenderSelect.appendChild(opt);
  });

  presetDefenderSelect.addEventListener('change', (e) => {
    const preset = defenderPreset[e.target.value];
    if (!preset) return;

    document.getElementById('toughness').value = preset.toughness;
    document.getElementById('save').value = preset.save;
    document.getElementById('invuln').value = preset.invuln;
  });
}
