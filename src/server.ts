import express from "express";
import dotenv from "dotenv";

import router from "./routes/image-uploads.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/uploads", express.static("uploads"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on host at localhost:${PORT}`);
});
