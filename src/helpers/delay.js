const sleep = (seconds) => {
  return new Promise((resolve) =>
    setTimeout(resolve, seconds * 1000 * 60 * 60)
  );
};

module.exports = {
  sleep,
};
