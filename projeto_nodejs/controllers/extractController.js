const express = require('express');
const router = express.Router();
const multer = require('multer');
const extractService = require('../services/extractService');

// Configuração do multer para armazenar o arquivo em uma pasta temporária
const upload = multer({ dest: 'uploads/' });

router.post('/extract-pdf-data', upload.single('pdf'), async (req, res) => {
    try {
        // Verifica se um arquivo foi enviado
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const data = await extractService.extractData(req.file);

        // Retorna os dados extraídos
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
