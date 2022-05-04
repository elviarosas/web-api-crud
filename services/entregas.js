const dbService = require("../config/db.js");

const addEntregas = (path) => {
  //console.log(body);

  // console.log(file);

  console.log(path);
  sql = `INSERT INTO entrega(fecha, url) VALUES( now(), '${path}')`;

  return dbService.querypromise(sql);
};

module.exports = {
  addEntregas,
};
