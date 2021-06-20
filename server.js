const express = require('express'); // imporando o pacote.
const app = express(); // inicializandno o pacote.
const nodemailer = require('nodemailer'); //importando o pacote.

const PORT = process.env.PORT || 5000;

// Midleware

app.use(express.static('public')); // Indicando qual é a pasta que os arquivos estáticos estão.
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Indicando qual é o caminho do arquivo princial. Ele que será aberto no browser.
});

app.post('/', (req, res) => {
  console.log(req.body);

  // Agora é hora de enviar os dados para o GMAIL. O método abaixo está descrito na documentação nodemailer.
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'leokattah@gmail.com',
  //     pass: 'Subway-01'
  //   },
  // });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // port for secure SMTP
    secureConnection: false, // TLS requires secureConnection to be false
    auth: {
      user: 'devleokattah@gmail.com',
      pass: 'Brasil-01',
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
