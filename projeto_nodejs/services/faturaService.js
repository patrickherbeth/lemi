const { extractDataFromPDF } = require('../utils/extractDataToPdf');

async function createFatura(data) {
    // Implementação da criação de fatura a partir dos dados
    return data;
}

async function createFaturaFromPDF(filePath) {
    const extractedData = await extractDataFromPDF(filePath);
    // Implementação da criação de fatura a partir dos dados extraídos
    return extractedData;
}

async function getAllFaturas() {
    // Implementação para obter todas as faturas
    return [];
}

module.exports = {
    createFatura,
    createFaturaFromPDF,
    getAllFaturas
};
