import { CLICK_NODE, KEY_UP, PAUSE, SET_CONTENT } from "../types";

import { nextStepMapClick, nextStepMap } from "../helpers/movingNode";
import { isEnd } from "../helpers/isEnd";

const initialState = {
  content: {
    map: [],
    xNull: 3,
    yNull: 3,
  },
  step: 0,
  isPaused: false,
  isStarted: false,
  isEnd: isEnd(),
};

const gameState = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return {
        ...state,
        content: { xNull: 3, yNull: 3, map: action.payload },
        step: 0,
        isStarted: false,
      };
    case KEY_UP:
      let bufGame = nextStepMap(state.content, action);
      return {
        ...state,
        content: { ...bufGame },
        step: state.step + 1,
        isStarted: true,
        isEnd: isEnd(),
      };
    case CLICK_NODE:
      let bufGameClick = nextStepMapClick(state.content, action);
      return {
        ...state,
        content: { ...bufGameClick },
        step: state.step + 1,
        isStarted: true,
        isEnd: isEnd(),
      };
    case PAUSE:
      return { ...state, isPaused: action.payload };
    default:
      return state;
  }
};

export { gameState };
