import { pagination } from "./calculatePages";

describe("Test for Pagination Lib", () => {
  it("Should give inicial pagination without dots", () => {
    const result = pagination(1, 4);
    const exemple = {
      hasDotBefore: false,
      hasDotAfter: false,
      rangePagesShow: [1, 2, 3, 4]
    };
    expect(result).toEqual(exemple);
  });

  it("Should give inicial pagination with dots", () => {
    const result = pagination(1, 6);
    const exemple = {
      hasDotBefore: false,
      hasDotAfter: true,
      rangePagesShow: [1, 2, 3, 4, 5]
    };
    expect(result).toEqual(exemple);
  });

  it("Should give middle pagination with dots", () => {
    const result = pagination(7, 10);
    const exemple = {
      hasDotBefore: true,
      hasDotAfter: true,
      rangePagesShow: [5, 6, 7, 8, 9]
    };
    expect(result).toEqual(exemple);
  });

  it("Should give final pagination with dots", () => {
    const result = pagination(10, 10);
    const exemple = {
      hasDotBefore: true,
      hasDotAfter: false,
      rangePagesShow: [6, 7, 8, 9, 10]
    };
    expect(result).toEqual(exemple);
  });
});
