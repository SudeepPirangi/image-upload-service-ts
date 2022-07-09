import express from "express";

import router from "./routes/image-uploads.routes";

const app = express();

app.use("/uploads", express.static("uploads"));
app.use(router);

export default app;
