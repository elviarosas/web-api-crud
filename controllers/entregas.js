const UsersService = require("../services/entregas.js");

module.exports = {
  addEntregas: async (req, res, next) => {
    try {
      const path = "/Documentos/" + req.file.filename;
      const entrega = await UsersService.addEntregas(path);
      res.status(200).json({ entrega });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al agregar entrega. Err: ${err}` });
    }
  },
};
