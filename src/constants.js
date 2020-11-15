require("dotenv").config();

module.exports = {
  local_connection: process.env.LOCAL_CONNECTION_URI,
  cloud_connection: process.env.CLOUD_CONNECTION_URI,
  local_db: process.env.LOCAL_DB_NAME,
  cloud_db: process.env.CLOUD_DB_NAME,
  hours_delay: parseInt(process.env.CODE_SLEEP),
};
