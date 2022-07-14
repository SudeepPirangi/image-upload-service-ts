import express from "express";
import cors from "cors";

import router from "./routes/image-uploads.routes";

const app = express();

app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(router);

export default app;
