// repositories/faturaRepository.js
const { Fatura } = require('../models/fatura');

async function createFatura(data) {
    return Fatura.create(data);
}

async function getAllFaturas() {
    return Fatura.findAll();
}

module.exports = {
    createFatura,
    getAllFaturas,
};
