const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'postgres', 'patrick21', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
