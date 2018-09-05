import Algorythm = require("./Algorythm");

describe("This is a simple test", () => {
  test("adds 1 + 2 to equal 3", () => {
    var x: Algorythm.Algorythm = new Algorythm.Algorythm(1, 2);
    expect(x.sum()).toBe(3);
  });

  test("minus 5 - 2 to equal 3", () => {
    var x: Algorythm.Algorythm = new Algorythm.Algorythm(5, 2);
    expect(x.minus()).toBe(3);
  });
});
