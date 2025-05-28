import app from "./app.js";
import logger from "./configs/logger.js";

//env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.info(`SERVER IS LISTING ON PORT ${PORT}`);
});
