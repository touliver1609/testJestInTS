describe("This is Callback", () => {
  test("the data is peanut butter", done => {
    function fetchData(callback: any): any {
      callback("peanut butter");
    }
    function callback(data: any) {
      expect(data).toBe("peanut butter");
      done();
    }

    fetchData(callback);
  });
});

describe("This is Promise", () => {
  function fetchData(x: number): any {
    var promise = new Promise((resolve: any, reject: any) => {
      if (x === 1) resolve("peanut butter");
      else reject("error ...");
    });
    return promise;
  }

  test("the data is peanut butter", () => {
    expect.assertions(1);
    return fetchData(1).then((data: any) => {
      expect(data).toBe("peanut butter");
    });
  });
  test("the fetch fails with an error", () => {
    expect.assertions(1);
    return expect(fetchData(2)).rejects.toMatch("error");
  });
});
