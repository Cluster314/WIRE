import { createRouteHandler } from "uploadthing/server";
import { uploadRouter } from "../uploadthing.js";

const handler = createRouteHandler({
  router: uploadRouter
});

export default {
  fetch(request) {
    return handler(request);
  }
};
