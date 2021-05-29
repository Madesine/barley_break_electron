import { SET_ACTIVE_SCREEN } from "../types";

const initialState = {
  active: "Menu",
};

const screen = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_SCREEN:
      return { ...state, active: payload };

    default:
      return state;
  }
};

export { screen };
