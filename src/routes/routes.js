import express from "express";
const { Router } = express;
const router = Router();

import control from "../controllers/control.js";
import sendMail from "../controllers/sendMail.js";
import sendMail2 from "../controllers/sendMail2.js";

// Control de acceso
router.all("*", control);

// Enviar correo
router.post("/sendMail/:parms", sendMail);
router.post("/sendMail2/:parms", sendMail2);

export default router;
