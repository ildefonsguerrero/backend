import { varios } from "./database.js";
import { getUrlParameter } from "./funciones.js";

/*
    Control de inserción y borrado de imágenes
*/
const control = (req, res, next) => {
  let ruta = req.params["0"].split("/")[1];
  let rutasValidas = ["sendMail"];

  if (rutasValidas.includes(ruta)) {
    var acc = getUrlParameter("acc", req.url);

    if (acc === false) {
      res.send("Error parámetro no informado");
      return;
    } else {
      if (acc !== varios.clau) {
        res.send("Error parámetro erróneo");
        return;
      }
    }
  }
  next();
};

export default control;
