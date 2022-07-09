import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on host at localhost:${PORT}`);
});
