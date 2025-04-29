const express = require('express');
const app = express();
const port = 3000;

// Middleware para o Express entender JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API rodando...');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
