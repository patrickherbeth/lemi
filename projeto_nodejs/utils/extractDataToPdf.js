const fs = require('fs');
const pdfParse = require('pdf-parse');

async function extractDataFromPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    const text = data.text;

    const extractedData = {
        numeroDoCliente: extractNumeroDoCliente(text),
        referente: extractReferente(text),
        classeEnergiaEletrica: extractClasseEnergiaEletrica(text),
        classeEnergiaSCEEE: extractClasseEnergiaSCEEE(text),
        classeEnergiaCompensada: extractClasseEnergiaCompensada(text),
        contribuicaoIluminacao: extractContribuicaoIluminacao(text),
    };

    return extractedData;
}

function extractNumeroDoCliente(text) {
    const match = text.match(/Numero DO CLIENTE:\s*(\d+)/);
    return match ? match[1] : null;
}

function extractReferente(text) {
    const match = text.match(/Referente:\s*(.*)/);
    return match ? match[1] : null;
}

function extractClasseEnergiaEletrica(text) {
    const quantidadeMatch = text.match(/classe Energia Elétrica.*Quantidade:\s*(\d+)/);
    const valorMatch = text.match(/classe Energia Elétrica.*Valor:\s*([\d,]+)/);
    return {
        quantidade: quantidadeMatch ? quantidadeMatch[1] : null,
        valor: valorMatch ? valorMatch[1] : null,
    };
}

function extractClasseEnergiaSCEEE(text) {
    const quantidadeMatch = text.match(/classe Energia SCEEE.*Quantidade:\s*(\d+)/);
    const valorMatch = text.match(/classe Energia SCEEE.*Valor:\s*([\d,]+)/);
    return {
        quantidade: quantidadeMatch ? quantidadeMatch[1] : null,
        valor: valorMatch ? valorMatch[1] : null,
    };
}

function extractClasseEnergiaCompensada(text) {
    const quantidadeMatch = text.match(/classe Energia Compensada GD I.*Quantidade:\s*(\d+)/);
    const valorMatch = text.match(/classe Energia Compensada GD I.*Valor:\s*([\d,]+)/);
    return {
        quantidade: quantidadeMatch ? quantidadeMatch[1] : null,
        valor: valorMatch ? valorMatch[1] : null,
    };
}

function extractContribuicaoIluminacao(text) {
    const match = text.match(/Contrib Ilum Publica Municipal.*Valor:\s*([\d,]+)/);
    return match ? match[1] : null;
}

module.exports = { extractDataFromPDF };
