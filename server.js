const express = require("express"); // imporando o pacote.
const app = express(); // inicializandno o pacote.

const PORT = process.env.PORT || 5000;

// Midleware
app.use(express.static('public'));


app.get ('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});