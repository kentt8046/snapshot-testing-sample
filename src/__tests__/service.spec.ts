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
    const user = service.createUser(input);
    expect(user).toMatchSnapshot();
  });

});
