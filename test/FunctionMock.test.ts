import Users from "../class/user";
import axios from "axios";
import foo from "../class/foo";

jest.mock("../class/foo"); // this happens automatically with automocking

// jest.mock("axios");

describe("Using a mock function", () => {
  function forEach(items: any, callback: any) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  const mockCallback = jest.fn();
  forEach([0, 2, 9], mockCallback);
  test("foreach", () => {
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(3);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The second argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(2);

    // The return value of the first call to the function was 42
    // expect(mockCallback.mock.results[0].value).toBe(42);
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
      .mockReturnValue(true)
      .mockReturnValueOnce("10")
      .mockReturnValueOnce(2);

    console.log(myMock(), myMock(), myMock(), myMock());
  });
});

describe("Mocking Modules", () => {
  //   test("should fetch users", () => {
  //     const resp = { data: [{ name: "Bob" }] };
  //     axios.get.mockResolvedValue(resp);

  //     // or you could use the following depending on your use case:
  //     // axios.get.mockImplementation(() => Promise.resolve(resp))

  //     return Users.all().then(users => expect(users).toEqual(resp.data));
  //   });
  // });

  describe("Mock implementation", () => {
    test("sthg0", () => {
      //   const myMockFn = jest.fn(cb => cb(null, true));

      //   myMockFn((err: any, val: any) => console.log(err));
      //   // > true

      //   myMockFn((err: any, val: any) => console.log(val));
      //   // > true

      // foo is a mock function
      //   const foo = import("../class/foo");

      foo.mockImplementation(() => 42);
      console.log(foo());
    });
  });
});
