const express = require("express");
//Obtrenemos las variables de ambiente
const dotenv = require("dotenv");
dotenv.config(); //inicaliamos las variables de ambiente
const port = process.env.PORT; //En caso de que en env no tenga especificada la variable de ambiente utiliza el pueerto 3000
const cors = require("cors");

//Obtenemos los datos de la BD
const { connection } = require("./config/db.js");

const app = express(); //Crea la App de Express que utilizaremos en toda la aplicacionón (Api)

//Middlewares que utilizamos para codificar y decodificar con json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//La ruta principal del webserver
app.get("/", (req, res) => {
  res.send("Página de inicio WebApi");
});

//Todas las rutas
app.use(require("./routes/routes.js"));

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
