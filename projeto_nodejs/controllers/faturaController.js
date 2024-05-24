const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const faturaService = require('../services/faturaService');

// Configuração do multer para armazenar o arquivo em uma pasta temporária
const upload = multer({ dest: 'uploads/' });

router.post('/', async (req, res) => {
    try {
        const fatura = await faturaService.createFatura(req.body);
        res.status(201).json(fatura);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        // Verifica se um arquivo foi enviado
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const filePath = path.join(__dirname, '../', req.file.path);

        // Chama a função para extrair dados do PDF e criar uma fatura
        const fatura = await faturaService.createFaturaFromPDF(filePath);

        // Remove o arquivo após a leitura
        fs.unlinkSync(filePath);

        res.status(201).json(fatura);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/get-all', async (req, res) => {
    try {
        const faturas = await faturaService.getAllFaturas();
        res.status(200).json(faturas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
