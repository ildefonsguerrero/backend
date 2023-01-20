import nodemailer from "nodemailer";

import { varios } from "./database.js";

const sendMail2 = (req, res) => {
  // console.log("entra con:");
  // console.log(req.headers["origin"]);
  // console.log(varios.origen2);
  if (req.headers["origin"] !== varios.origen2) {
    res.sendStatus(200);
    return;
  }
  // console.log("procesa");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: varios.dir,
      pass: varios.psw,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var html = `<html>
    <h3> Correu </h3>
    <p> ${req.body["email"]} </p>
    <h3> Assumpte </h3>
    <p> ${req.body["asunto"]} </p>
    <h3> Missatge </h3>
    <p> ${req.body["mensaje"]} </p>
    </html>`;

  let mailOptions = {
    from: varios.dir,
    to: varios.emailto2,
    subject: req.body["nombre"],
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    // console.log(error);
    res.sendStatus(200);
  });
};

export default sendMail2;
