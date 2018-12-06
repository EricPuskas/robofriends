import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage Component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@doe.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@doe.com"
    }
  ]);
});

it("Filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@doe.com"
      }
    ],
    searchField: "a",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});
