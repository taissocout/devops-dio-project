// Importa o express
const express = require('express');

// Cria a aplicação
const app = express();

// Define a porta
const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('🚀 API DevOps rodando com sucesso!');
});

// Rota de health check (importante pra DevOps)
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Sobe o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
