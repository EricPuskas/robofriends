import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };
  it("Should return the initial state", () => {
    expect(reducers.searchRobot(undefined, {})).toEqual({ searchField: "" });
  });

  it("Should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobot(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("Should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("Should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      error: "",
      isPending: true
    });
  });

  it("Should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com"
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com"
        }
      ],
      error: "",
      isPending: false
    });
  });

  it("Should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Error!"
      })
    ).toEqual({
      robots: [],
      error: "Error!",
      isPending: false
    });
  });
});
