import { NO_IMAGE_UPLOAD } from "../types";

const noValidFileUpload = (payload) => {
  return { type: NO_IMAGE_UPLOAD, payload };
};

export { noValidFileUpload };
