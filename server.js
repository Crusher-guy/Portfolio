const express = require("express"); // imporando o pacote.
const app = express(); // inicializandno o pacote.

const PORT = process.env.PORT || 5000;

// Midleware

app.use(express.static('public')); // Indicando qual é a pasta que os arquivos estáticos estão.
app.use(express.json());

app.get ('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html") // Indicando qual é o caminho do arquivo princial
})

app.post('/', (req,res) => {
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});