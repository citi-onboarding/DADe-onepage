const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const body = `
    Nome: ${name}
    Email: ${email}
    Assunto: ${subject}
    Mensagem: ${message}
    `;

    await mailServer({
      destinationUser: process.env.EMAIL,
      subjectText: subject,
      textOption: body,
    });

    res.status(200).send('Email enviado com sucesso');
  } catch (error) {
    res.status(500).send('Erro no envio');
    console.log(error);
  }
};

module.exports = sendMail;