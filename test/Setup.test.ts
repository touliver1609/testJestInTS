var City: Array<string>;
function initializeCityDatabase() {
  City = ["aaa", "Vienna", "XXX", "YYY"];
}

function clearCityDatabase() {
  City.push("San Juan");
  console.log(City);
}

function isCity(name: any): any {
  if (City.indexOf(name) !== -1) {
    return 1;
  }
  return undefined;
}

describe("This is Setup", () => {
  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).not.toBeTruthy();
  });
});

describe("This is one time setup", () => {
  beforeAll(() => {
    return initializeCityDatabase();
  });

  afterAll(() => {
    return clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).not.toBeTruthy();
  });
});
