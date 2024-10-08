"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pessoas", {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cpf: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      Telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pessoas");
  },
};
