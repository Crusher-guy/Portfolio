const express = require('express'); // imporando o pacote.
const app = express(); // inicializandno o pacote.
const nodemailer = require('nodemailer'); //importando o pacote.
require('dotenv').config() //importando o pacote.

const PORT = process.env.PORT || 5000;

// Midleware

app.use(express.static('public')); // Indicando qual é a pasta que os arquivos estáticos estão.
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Indicando qual é o caminho do arquivo princial. Ele que será aberto no browser.
});

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.port_server, // port for secure SMTP
    secureConnection: false, // TLS requires secureConnection to be false
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: 'devleokattah@gmail.com',
    subject: `Mensagem de  ${req.body.nome}: ${req.body.email}`,
    text: req.body.message, 
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email enviado:' + info.response);
      res.send('Email enviado com sucesso!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
