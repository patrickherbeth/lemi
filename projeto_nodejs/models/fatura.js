const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:patrick21@localhost:5432/mydatabase');

const Fatura = sequelize.define('Fatura', {
    numeroDoCliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    referente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidadeEnergiaEletrica: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    valorEnergiaEletrica: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    quantidadeEnergiaSCEEE: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    valorEnergiaSCEEE: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    quantidadeEnergiaCompensada: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    valorEnergiaCompensada: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    valorContribuicaoIluminacao: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
}, {
    tableName: 'faturas',
    timestamps: false,
});

sequelize.sync();

module.exports = { sequelize, Fatura };
