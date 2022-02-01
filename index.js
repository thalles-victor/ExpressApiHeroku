const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res ) {
  res.send('Olá, A api está funcionando normalmente')
});

app.get('/getdata', function( req, res ) {
  res.json({ username: "Thalles", old: 32 })
})

app.listen(port, () => {
  console.info(`Aplicação rodando em http://localhost:${port}`);
});