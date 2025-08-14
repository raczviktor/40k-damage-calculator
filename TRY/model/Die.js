import { DieType } from './DieType.js';

export class Die {
  constructor(type) {
    if (!Object.values(DieType).includes(type)) {
      throw new Error(`Unsupported DieType: ${type}`);
    }
    this.type = type;
    Object.freeze(this);
  }

  static d3() { return new Die(DieType.D3); }
  static d6() { return new Die(DieType.D6); }

  sides() { return this.type === DieType.D3 ? 3 : 6; }

  min() { return 1; }
  max() { return this.sides(); }

  avg() {
    const raw = (this.sides() + 1) / 2;
    return Math.round(raw);
  }

  roll(rng = Math.random) {
    return 1 + Math.floor(rng() * this.sides());
  }

  toString() { return this.type; }

  equals(other) {
    return other instanceof Die && other.type === this.type;
  }
}
