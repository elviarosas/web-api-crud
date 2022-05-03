const express = require("express");
const router = express.Router();

const EntregasControllers = require("../controllers/entregas.js");
const { uploadMiddleware } = require("../middleware/upload.js");

router.post(
  "/add",
  uploadMiddleware.single("file"),
  EntregasControllers.addEntregas
);

module.exports = router;
