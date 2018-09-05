export interface IAlgorythm {
  sum(): number;
  minus(): number;
}

export class Algorythm implements IAlgorythm {
  constructor(public a: number, public b: number) {}
  sum(): number {
    return this.a + this.b;
  }
  minus(): number {
    return this.a - this.b;
  }
}
