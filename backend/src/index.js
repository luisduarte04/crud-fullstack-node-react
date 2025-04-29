const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware para o Express entender JSON e CORS
app.use(cors({ origin: '*' }));
app.use(express.json());

// Rotas de usuários

app.use('/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API rodando...');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
