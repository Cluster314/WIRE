import { createRouteHandler } from "uploadthing/server";
import { uploadRouter } from "../uploadthing.js";

const handler = createRouteHandler({
  router: uploadRouter
});

export { handler as GET, handler as POST };
