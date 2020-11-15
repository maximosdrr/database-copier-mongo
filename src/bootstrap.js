const local = require("./core/local");
const cloud = require("./core/cloud");
const constants = require("./constants");
const delay = require("./helpers/delay");

module.exports = {
  async execute() {
    while (true) {
      console.log(
        `[Bootstrap]: O Bootstrap está amarrando os cadarços e preparando-se para rodar apos ${constants.hours_delay} horas`
      );
      const localdb = await local.getDatabase();
      await cloud.exportDatabase(localdb);
      console.log(
        `[Bootstrap]: Bootstrap se despede e retornará em ${constants.hours_delay} horas`
      );
      await delay.sleep(constants.hours_delay);
    }
  },
};
