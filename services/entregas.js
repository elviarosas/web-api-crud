const dbService = require("../config/db.js");

const addEntregas = (body) => {
  const { file } = body;
  url = file.location;

  sql = `INSERT INTO entrega(path)
            VALUES( '${url}'`;

  return dbService.querypromise(sql);
};

module.exports = {
  addEntregas,
};
