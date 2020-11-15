const constants = require("../constants");
const conn = require("./connection");

const getDatabase = async () => {
  console.log(
    "[LOCAL]: Coletando os dados necessarios do banco de dados local"
  );
  try {
    const connection = await conn.connect(constants.local_connection);
    const collections = await connection.db.listCollections().toArray();
    const db = {};

    for (const i in collections) {
      const collectionName = collections[i].name;
      console.log(`[Local]: Coletando dados em ${collectionName}`);
      db[collectionName] = [];

      const collectionData = await connection.db
        .collection(collectionName)
        .find({})
        .toArray();

      console.log(
        `[Local]: Adicionando ${collectionName} no array de exportação`
      );

      db[collectionName] = collectionData;
      console.log(`[Local]: ${collectionName} exportado com sucesso`);
    }
    console.log("[LOCAL]: Prontinho, dados coletados, agora retorne :)");
    return db;
  } catch (e) {
    console.log(`[Local]: um erro inesperado ocorreu: ${e}`);
  }
};

module.exports = {
  getDatabase,
};
