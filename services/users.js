const dbService = require("../config/db.js");

const getAllUsers = () => {
  sql = "SELECT * FROM user";

  return dbService.querypromise(sql);
};

const getUser = (id) => {
  sql = ` SELECT idUser, email, password, nombre, planta, tipoUsuario 
            FROM user 
            WHERE idUser = ${id}`;

  return dbService.querypromise(sql);
};

const addUser = (body) => {
  const { email, password, nombre, planta, tipoUsuario } = body;

  sql = `INSERT INTO user(email, password, nombre, planta, tipoUsuario)
            VALUES( '${email}', '${password}', '${nombre}', '${planta}', ${tipoUsuario})`;

  return dbService.querypromise(sql);
};

const updateUser = (id, body) => {
  const { email, password, nombre, planta, tipoUsuario } = body;

  sql = ` UPDATE user 
                SET 
                email= '${email}', 
                password = '${password}', 
                nombre = '${nombre}', 
                planta = '${planta}', 
                tipoUsuario = ${tipoUsuario}
            WHERE idUser = ${id} `;

  return dbService.querypromise(sql);
};

const deleteUser = (id) => {
  sql = `DELETE FROM user WHERE idUser = ${id}`;

  return dbService.querypromise(sql);
};

const getAllPlantas = () => {
  sql = "SELECT idPlanta, descripcion FROM planta";

  return dbService.querypromise(sql);
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getAllPlantas,
};
