const express = require("express");
const router = express.Router();

const UsersControllers = require("../controllers/users.js");

router.use("/users", require("./users.js"));
//router.get("/plantas", UsersControllers.getAllPlantas);
router.use("/entregas", require("./entregas.js"));

module.exports = router;
