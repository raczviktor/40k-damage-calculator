export default class PresetController {
  constructor({ view, manualView, resultView, services, presets }) {
    this.view = view;
    this.manualView = manualView;
    this.resultView = resultView;
    this.services = services; // { state, weaponsMapper, runComparison, renderTable }
    this.presets = presets;   // { attackers, defenders }
  }

  init() {
    const keys = Object.keys(this.presets.attackers || {});
    this.view.setOptions(keys, (k) => this.presets.attackers[k]?.name || k);
    this.view.onAttackerPick((key) => this.handleSelect(key));
  }

  handleSelect(key) {
    if (!key) {
      // nincs (érvényes) választás → üzenet és (opcionálisan) ürítjük a manuális UI-t
      this.resultView.showHint('💡 Válassz előre megadott támadót a táblázatos összehasonlításhoz.');
      // this.services.weaponsMapper.setMounts(this.manualView.getContainer(), this.manualView.getTemplate(), []);
      return;
    }

    const preset = this.presets.attackers[key];
    if (!preset) return;

    const { weaponsMapper, state, runComparison, renderTable } = this.services;
    const phase = state.phase;

    // A kiválasztott preset mountjainak alkalmazása a manuális UI-ra
    const mounts = (phase === 'ranged' ? preset.ranged : preset.melee) || [];
    weaponsMapper.setMounts(this.manualView.getContainer(), this.manualView.getTemplate(), mounts);

    // Összehasonlítás 5 defender ellen
    const rows = runComparison(mounts, phase);
    const tableHTML = renderTable(rows);
    this.resultView.render(tableHTML);
  }
}
