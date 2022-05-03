const UsersService = require("../services/entregas.js");

module.exports = {
  addEntregas: async (req, res, next) => {
    try {
      console.log(req.body);
      const entrega = await UsersService.addEntregas(req.body);
      res.status(200).json({ entrega });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al agregar entrega. Err: ${err}` });
    }
  },
};
