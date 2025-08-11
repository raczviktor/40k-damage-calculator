export default class ManualView {
  constructor(root) {
    this.root = root;
    this.phaseSelect = root?.querySelector('#phase');
    this.container   = root?.querySelector('#weapons-container');
    this.template    = root?.querySelector('#weapon-template')?.firstElementChild;
    this.addBtn      = root?.querySelector('#add-weapon');
    this.calcBtn     = root?.querySelector('#calc');
    this.toughness   = root?.querySelector('#toughness');
    this.save        = root?.querySelector('#save');
    this.invuln      = root?.querySelector('#invuln');

    // Esemény-őrzők: minden kulcshoz max 1 aktív listener
    this._listeners = Object.create(null);
  }

  get phase() { return this.phaseSelect?.value === 'melee' ? 'melee' : 'ranged'; }
  getContainer() { return this.container; }
  getTemplate()  { return this.template; }
  getDefenderValues() {
    return { toughness: +this.toughness.value, save: +this.save.value, invuln: +this.invuln.value };
  }

  // Belső segéd – mindig levesszük az előzőt, mielőtt újat tennénk fel
  _bindOnce(el, type, key, cb) {
    if (!el) return;
    if (this._listeners[key]) {
      el.removeEventListener(type, this._listeners[key]);
    }
    this._listeners[key] = cb;
    el.addEventListener(type, cb, { passive: true });
  }

  onAddWeapon(cb)   { this._bindOnce(this.addBtn,    'click',  'add',   cb); }
  onCalculate(cb)   { this._bindOnce(this.calcBtn,   'click',  'calc',  cb); }
  onPhaseChange(cb) { this._bindOnce(this.phaseSelect,'change','phase', cb); }
}
