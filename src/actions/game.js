import { setArrayFromSize } from "../helpers";
import { CLICK_NODE, KEY_UP, PAUSE, SET_CONTENT } from "../types";

const setContent = (payload) => {
  const { fieldSize, methodOptions } = payload;

  const content = setArrayFromSize(fieldSize, methodOptions);

  return { type: SET_CONTENT, payload: content };
};

const pressKey = (idKey) => {
  return { type: KEY_UP, payload: idKey };
};

const clickNode = (targetXY) => {
  return { type: CLICK_NODE, payload: targetXY };
};

const pauseMode = (payload) => {
  return { type: PAUSE, payload };
};

export { setContent, pressKey, clickNode, pauseMode };
