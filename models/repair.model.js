const { db } = require('../utils/dataBase');
const { DataTypes } = require('sequelize');

const Repair = db.define('repair', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        defaultValue: 'pending',
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = { Repair };
