const express = require("express");
const router = express.Router();

const UsersControllers = require("../controllers/users.js");

router.get("/", UsersControllers.getAllUsers);
router.get("/:id", UsersControllers.getUser);
router.post("/add", UsersControllers.addUser);
router.put("/update/:id", UsersControllers.updateUser);
router.delete("/delete/:id", UsersControllers.deleteUser);

router.post("/login", UsersControllers.loginUser);

module.exports = router;
