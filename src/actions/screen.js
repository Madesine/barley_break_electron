import { SET_ACTIVE_SCREEN } from "../types";

const setActualScreen = (value) => {
  return { type: SET_ACTIVE_SCREEN, payload: value };
};

export { setActualScreen };
