'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tbUsers', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false, 
         autoIncrement: true,
         primaryKey: true
        },
        nome: {
          allowNull: false,
          type: Sequelize.STRING(60)           
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(100)           
        },
        senha: {
          allowNull: false,
          type: Sequelize.STRING(32)           
        },
        AtivoInativo: {
          allowNull: false,
          type: Sequelize.STRING(1)           
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },       
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },              
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbUsers');
  }
};
