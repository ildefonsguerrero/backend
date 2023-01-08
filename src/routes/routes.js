import express from "express";
const { Router } = express;
const router = Router();

import control from "../controllers/control.js";
import sendMail from "../controllers/sendMail.js";

// Control de acceso
router.all("*", control);

// Enviar correo
router.post("/sendMail/:parms", sendMail);

export default router;
