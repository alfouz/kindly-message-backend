// Cargamos el modulo express
const express = require("express");
const router = express.Router();
// Cargamos el controlador de videojuegos
const requestController = require("../controllers/messageController");
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador
router.get("/", requestController.getMessage);
module.exports = router;
