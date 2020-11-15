const mongoose = require("mongoose");

const connect = (url) => {
  const result = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return result;
};

module.exports = {
  connect,
};
