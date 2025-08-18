export default class Defender {
  constructor(src = {}) {
    const {
      toughness = 0,
      save = 7,
      invuln = 0,
      // ÚJ: modellenkénti W, plusz pár alias ha később máshonnan jön
      woundsPerModel,
      wounds,
      modelWounds
    } = src;

    this.toughness = Number(toughness) || 0;
    this.save = Number(save) || 7;
    this.invuln = Number(invuln) || 0;

    // tárold el változatlanul
    const wpm = woundsPerModel ?? wounds ?? modelWounds;
    this.woundsPerModel = (wpm != null && isFinite(wpm)) ? Number(wpm) : undefined;

    // (opcionális) ha egységméretet is adnánk majd
    if (src.models != null) this.models = Number(src.models);
  }
}
