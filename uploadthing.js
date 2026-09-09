import { createUploadthing } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  messageAttachment: f([
    "image",
    "video",
    "audio",
    "pdf",
    "text",
    "blob",
  ])
    .onUploadComplete(({ file }) => {
      console.log("WIRE attachment uploaded:", file.name);
    }),
};
