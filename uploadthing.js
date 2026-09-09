import { createUploadthing } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  messageAttachment: f({
    blob: {
      maxFileSize: "20MB",
      maxFileCount: 1
    }
  }).onUploadComplete(({ file }) => {
    console.log("WIRE attachment uploaded:", file.name);
  })
};
