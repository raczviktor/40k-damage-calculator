// controllers/ManualController.js – manuális mód, NINCS alapértelmezett fegyver
export default class ManualController {
  constructor({ view, resultView, models, services }) {
    this.view = view;
    this.resultView = resultView;
    this.Attacker = models.Attacker;
    this.Defender = models.Defender;
    this.services = services; // { weaponsMapper, calcTotals }
    this._inited = false;     // ne fusson kétszer
  }
  init() {
    if (this._inited) return;
    this._inited = true;

    const { weaponsMapper } = this.services;
    const container = this.view.getContainer();
    const template = this.view.getTemplate();

    // DEFAULT: NEM teszünk be fegyvert. A konténer induláskor üres marad.

    // Új sor hozzáadása felhasználói kérésre
    this.view.onAddWeapon(() => weaponsMapper.addWeaponFromTemplate(template, container));

    // Fázisváltáskor töröljük az eredményt (ne maradjon félrevezető)
    this.view.onPhaseChange(() => {
      this.resultView.showHint('💡 Manuális mód: adj hozzá legalább egy fegyvert, majd kattints a Számítás gombra.');
    });

    // Manuális számítás
    this.view.onCalculate(() => {
      const phase = this.view.phase;
      const mounts = weaponsMapper.readMounts(container);
      const attacker = new this.Attacker({
        name: 'Manual',
        rangedMounts: phase === 'ranged' ? mounts : [],
        meleeMounts:  phase === 'melee'  ? mounts : []
      });
      const weapons = attacker.getWeapons(phase);
      const defVals = this.view.getDefenderValues();
      const res = this.services.calcTotals(weapons, new this.Defender(defVals));
      this.resultView.renderManual(res);
    });
  }
}
