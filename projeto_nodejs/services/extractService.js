const path = require('path');
const fs = require('fs');
const { extractDataFromPDF } = require('../utils/extractDataToPdf');

async function extractData(file) {
    try {
        const filePath = path.join(__dirname, '../', file.path);

        // Chama a função para extrair dados do PDF
        const data = await extractDataFromPDF(filePath);

        // Remove o arquivo após a leitura
        fs.unlinkSync(filePath);

        return data;
    } catch (error) {
        console.error('Erro ao extrair dados do PDF:', error);
        throw new Error('Erro ao processar o PDF.');
    }
}

module.exports = {
    extractData
};
