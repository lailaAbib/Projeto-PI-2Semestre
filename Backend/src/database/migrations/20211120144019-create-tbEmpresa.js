'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tbEmpresas', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false, 
         autoIncrement: true,
         primaryKey: true
        },
        empresa: {
          allowNull: false,
          type: Sequelize.STRING(60)           
        },
        cnpj: {
          allowNull: false,
          type: Sequelize.STRING(20)           
        },
        responsavel: {
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
    await queryInterface.dropTable('tbEmpresas');
  }
};
