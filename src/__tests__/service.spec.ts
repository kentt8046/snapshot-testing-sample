import "jest";

import * as service from "../service";

describe("service", () => {

  it("createUser", () => {
    const input = {
      firstName: "太郎",
      lastName: "てすと",
      email: "test@email.com",
      accountName: "test",
    };
    const { id, ...user } = service.createUser(input);
    expect(user).toEqual({
      firstName: "太郎",
      lastName: "てすと",
      email: "test@email.com",
      accountName: "test",
    });
    expect(typeof id).toEqual("string");
  });

  it("createUser - snapshot", () => {
    const input = {
      firstName: "太郎",
      lastName: "てすと",
      email: "test@email.com",
      accountName: "test",
    };
    const { id, ...user } = service.createUser(input);
    expect(user).toMatchSnapshot();
    expect(typeof id).toEqual("string");
  });

});
