import { createRouteHandler } from "uploadthing/server";
import { uploadRouter } from "../uploadthing.js";

const uploadHandler = createRouteHandler({
  router: uploadRouter
});

export default async function handler(req, res) {
  const request = new Request(
    `https://${req.headers.host}${req.url}`,
    {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD"].includes(req.method)
        ? undefined
        : req.body
    }
  );

  const response = await uploadHandler(request);

  res.status(response.status);

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.arrayBuffer();

  res.send(Buffer.from(body));
}
