import { SET_FILED_SIZE_OPTION, SET_METHOD_OPTION } from "../types";

const initialState = {
  fieldSize: "4x4",
  methodOptions: "Numeric",
};


const settingsObject = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILED_SIZE_OPTION:
      return { ...state, fieldSize: action.payload };
    case SET_METHOD_OPTION:
      return { ...state, methodOptions: action.payload };
    default:
      return state;
  }
};

export { settingsObject };
