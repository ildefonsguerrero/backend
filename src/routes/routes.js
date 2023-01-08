import express from "express";
const { Router } = express;
const router = Router();

import control from "../controllers/control.js";
import sendMail from "../controllers/sendMail.js";
import getServer from "../controllers/getServer.js";

// Control de acceso
router.all("*", control);

// Enviar correo
router.post("/sendMail/:parms", sendMail);

// Página principal
router.get("*", getServer);

export default router;
