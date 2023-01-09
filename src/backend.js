import express from "express";
import bodyParser from "body-parser";

// Creamos servidor
const server = express();

// rutas
import indexRoutes from "./routes/routes.js";
const port = 8001;

// para poder usar __dirname
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// definimos la ruta donde están todos los archivos. con join no tenemos que mirar si / o \ (por el S.O.)
server.set("views", join(__dirname, "views"));

// permitir desde otro servidor
server.use(cors(corsOptions));

// Poder recibir datos
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// indicamos donde está el enrutamiento
server.use(indexRoutes);

// indicamos donde están los ficheros para poder ser usados en las páginas
server.use(express.static(join(__dirname, "public")));

// Control de cualquier otro sitio
server.all("*", function (req, res) {
  res.sendStatus(200);
  return;
});

// Escuchamos por el puerto port
server.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
