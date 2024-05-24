const express = require('express');
const faturaController = require('./controllers/faturaController');
const extractController = require('./controllers/extractController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Usando o controlador de faturamento
app.use('/faturas', faturaController);

// Usando o controlador de extração de dados do PDF
app.use('/extract', extractController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
