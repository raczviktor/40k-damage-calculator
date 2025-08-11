import Weapon from '../model/Weapon.js';
import WeaponMount from '../model/WeaponMount.js';

export function weaponFromDiv(div) {
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

export function mountFromDiv(div) {
  const weapon = weaponFromDiv(div);
  const count = Math.max(1, Math.floor(+div.querySelector('.count')?.value || 1));
  return new WeaponMount({ weapon, count });
}

export function readMounts(container) {
  return Array.from(container.querySelectorAll('.weapon')).map(mountFromDiv);
}

export function addWeaponFromTemplate(template, container, initialMount = null) {
  const row = template.cloneNode(true);
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
  row.querySelector('.remove-weapon')?.addEventListener('click', () => row.remove());
  container.appendChild(row);
}

export function setMounts(container, template, mounts = []) {
  container.innerHTML = '';
  (mounts || []).forEach(m => addWeaponFromTemplate(template, container, m));
}
