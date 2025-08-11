export default class PresetView {
  constructor(root) {
    this.root = root;
    this.input = root?.querySelector('#presetAttackerSearch');
    this.list  = root?.querySelector('#presetAttackerList');
    this.options = [];              // [{key, label}]
    this.labelToKey = new Map();    // lower(label) -> key
  }

  setOptions(keys = [], mapLabel = (k) => k) {
    if (!this.list) return;
    this.options = keys.map(k => ({ key: k, label: mapLabel(k) }));
    this.labelToKey.clear();
    this.list.innerHTML = '';
    for (const { key, label } of this.options) {
      const opt = document.createElement('option');
      opt.value = label;                  // datalist a labelt mutatja
      this.list.appendChild(opt);
      this.labelToKey.set(label.toLowerCase(), key);
    }
    // alaphelyzet: input üres
    if (this.input) this.input.value = '';
  }

  // külsőből is beállítható (ha kell)
  setValueByKey(key) {
    const found = this.options.find(o => o.key === key);
    if (found && this.input) this.input.value = found.label;
  }

  onAttackerPick(handler) {
    const resolve = () => {
      if (!this.input) return;
      const label = this.input.value.trim();
      const key = this.labelToKey.get(label.toLowerCase()) || '';
      handler(key); // üres string = nincs érvényes választás
    };
    this.input?.addEventListener('change', resolve);
    this.input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') resolve();
    });
  }
}
