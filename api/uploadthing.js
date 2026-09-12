import { createRouteHandler } from "uploadthing/server";
import { uploadRouter } from "../uploadthing.js";

const handler = createRouteHandler({
  router: uploadRouter
});

export default async function handlerWithCors(request) {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin === "https://cluster314.github.io" ? origin : "https://cluster314.github.io",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-uploadthing-package",
        "Access-Control-Max-Age": "86400"
      }
    });
  }

  const response = await handler(request);

  const headers = new Headers(response.headers);

  headers.set(
    "Access-Control-Allow-Origin",
    origin === "https://cluster314.github.io"
      ? origin
      : "https://cluster314.github.io"
  );

  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-uploadthing-package"
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
