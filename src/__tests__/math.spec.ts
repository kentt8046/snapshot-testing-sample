import "jest";

import * as math from "../math";

describe("math", () => {

  it("add(1, 2) === 3", () => {
    expect(math.add(1, 2)).toEqual(3);
  });

  it("sub(1, 2) === -1", () => {
    expect(math.sub(1, 2)).toEqual(-1);
  });

});
