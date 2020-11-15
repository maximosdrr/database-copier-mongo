const constants = require("../constants");
const conn = require("./connection");

const exportDatabase = async (db) => {
  try {
    console.log("[Cloud]: Exportando dados para nuvem...");

    const connection = await conn.connect(constants.cloud_connection);
    for (const collection in db) {
      console.log(`[Cloud]: Apagando coleção ${collection}`);
      await connection.db.dropCollection(collection);
      console.log(`[Cloud]: Inserindo dados em ${collection}`);

      await connection.db.collection(collection).insertMany(db[collection]);
      console.log(`[Cloud]: Dados inseridos em ${collection}`);
    }
    console.log("[Cloud]: Todos os dados foram exportados com sucesso");
  } catch (e) {
    console.log(`[Cloud]: um erro inesperado ocorreu: ${e}`);
  }
};

module.exports = {
  exportDatabase,
};
