const request = require('supertest');
const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Simulação de banco de dados
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// Rota para listar todos os itens
app.get('/items', (req, res) => {
    res.json(items);
});

// Rota para obter um item por ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item não encontrado');
    res.json(item);
});

// Rota para criar um novo item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Rota para atualizar um item existente
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item não encontrado');

    item.name = req.body.name;
    res.json(item);
});

// Rota para deletar um item
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item não encontrado');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
});

// Testes
describe('GET /items', () => {
    it('deve retornar todos os itens', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
    });
});

// Inicia o servidor para testes
if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => {
        console.log(`Servidor rodando em http://localhost:3000`);
    });
}

module.exports = app;
