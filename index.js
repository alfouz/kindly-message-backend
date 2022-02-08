const express = require("express");
const logger = require("morgan");
const messageRoutes = require("./routes/messageRoutes");
var cors = require("cors");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json("Make a request to /message to get your kindly message");
});

// Rutas privadas que solo pueden ser consumidas con un token generado
app.use("/message", messageRoutes);

// Manejando errores HTTP 404 para solicitudes de contenido inexistente
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Manejo de errores, respuestas con codigo HTTP 500, HTTP 404
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Internal error" });
});

app.listen(3300, function () {
  console.log("El servidor ha sido inicializado: http://localhost:3300");
});
