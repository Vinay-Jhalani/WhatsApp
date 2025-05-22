import dotenv from "dotenv";
import app from "./app.js";

//dotenv
dotenv.config();

//env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS LISTING ON PORT ${PORT}`);
});
