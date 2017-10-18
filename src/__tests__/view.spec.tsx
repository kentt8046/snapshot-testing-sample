import "jest";

import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

import { init } from "jest-react-vrt";

import { App } from "../view/App";

describe("view", () => {

  const { beforeAll, afterAll } = init();

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  afterAll(() => { });

  it("snapshot", () => {
    const wrapper = Enzyme.mount(<App text="てきすと" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("screenshot", async () => {
    await expect(<App text="text" />).toMatchScreenshot();
  });

});
