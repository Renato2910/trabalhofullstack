const Sequelize = require("sequelize");
const config = require("../config/database.js");

const Pessoa = require("../model/Pessoa");

const connection = new Sequelize(config);

Pessoa.init(connection);
Pessoa.associate(connection.model);

module.exports = connection;
