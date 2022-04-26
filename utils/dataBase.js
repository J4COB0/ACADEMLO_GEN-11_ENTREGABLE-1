const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'gen-11_Entregable-1',
    username: 'postgres',
    password: 'postgresql133',
    logging: false
});

module.exports = { db };
