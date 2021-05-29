import { NO_IMAGE_UPLOAD } from "../types";

const initialState = {
  isImage: undefined,
};

const dropZone = (state = initialState, { type, payload }) => {
  switch (type) {
    case NO_IMAGE_UPLOAD:
      return { ...state, isImage: payload };

    default:
      return state;
  }
};

export { dropZone };
