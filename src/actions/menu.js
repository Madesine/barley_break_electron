import { SET_FILED_SIZE_OPTION, SET_METHOD_OPTION } from "../types";

const setFieldSize = (payload) => {
  return { type: SET_FILED_SIZE_OPTION, payload };
};

const setMethodOption = (payload) => {
  return { type: SET_METHOD_OPTION, payload };
};

export { setFieldSize, setMethodOption };
