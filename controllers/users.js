const UsersService = require("../services/users.js");
const jwt = require("jsonwebtoken");

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      email = req.body.email;
      password = req.body.password;

      const user = await UsersService.getLogin(email, password);
      //res.status(200).json({ users });
      console.log(user);

      if (user[0]) {
        const token = jwt.sign({ email: user.email }, "SECRET");
        console.log("entro a token");

        if (token) {
          const datos = {
            message: "token",
            token: token,
            id: user[0].idUser,
            nombre: user[0].nombre,
            planta: user[0].planta,
            tipoUsuario: user[0].tipoUsuario,
          };

          console.log(datos);
          res.status(200).json(datos);
        } else {
          res
            .status(500)
            .json({ message: "Authentication Failed", success: false });
        }
      } else {
        res
          .status(500)
          .json({ message: "Authentication Failed", success: false });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al obtener los usuarios. Err: ${err}` });
    }
  },
  getAllUsers: async (req, res, next) => {
    try {

      
      const users = await UsersService.getAllUsers();
      console.log(users);
      res.status(200).json({ users });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al obtener los usuarios. Err: ${err}` });
    }
  },
  getUser: async (req, res, next) => {
    try {

      params  =  {
        id : req.param.id,
        nom : req.paran.nom
      }

      const users = await UsersService.getUser(req.params.id);
      res.status(200).json({ users });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al obtener el usuario. Err: ${err}` });
    }
  },

  addUser: async (req, res, next) => {
    try {
      console.log(req.body);
      const user = await UsersService.addUser(req.body);
      res.status(200).json({ user });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al añadir el usuario. Err: ${err}` });
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await UsersService.updateUser(req.params.id, req.body);
      res.status(200).json({ user });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al actualizar el usuario. Err: ${err}` });
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const user = await UsersService.deleteUser(req.params.id);
      res.status(200).json({ user });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al eliminar el usuario. Err: ${err}` });
    }
  },
  getAllPlantas: async (req, res, next) => {
    try {
      const plantas = await UsersService.getAllPlantas();
      res.status(200).json({ plantas });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error al obtener las plantas. Err: ${err}` });
    }
  },
};
