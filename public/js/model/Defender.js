export default class Defender {
    constructor({ toughness, save, invuln = 0, rerollWound = 'none' }) {
      this.toughness = toughness;
      this.save = save;
      this.invuln = invuln;
      this.rerollWound = rerollWound;
    }
  }
  