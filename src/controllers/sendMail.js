import nodemailer from "nodemailer";

import { varios } from "./database.js";

const sendMail = (req, res) => {
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
    <h3> Telèfon </h3>
    <p> ${req.body["telef"]} </p>
    <h3> Missatge </h3>
    <p> ${req.body["mensaje"]} </p>
    </html>`;

  let mailOptions = {
    from: varios.dir,
    to: varios.emailto,
    subject: req.body["nombre"],
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    // console.log(error);
    res.sendStatus(200);
  });
};

export default sendMail;
