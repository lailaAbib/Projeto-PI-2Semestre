'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tbEnderecos', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false, 
         autoIncrement: true,
         primaryKey: true
        },
        CodPk_Users: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'tbUsers',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        },
        rua: {
          allowNull: false,
          type: Sequelize.STRING(100)           
        },
        numero: {
          allowNull: false,
          type: Sequelize.INTEGER           
        },
        bairro: {
          allowNull: false,
          type: Sequelize.STRING(50)           
        },
        complemento: {
          allowNull: false,
          type: Sequelize.STRING(50)           
        },
        cep: {
          allowNull: false,
          type: Sequelize.STRING(9)           
        },
        cidade: {
          allowNull: false,
          type: Sequelize.STRING(60)           
        },

        UF: {
          allowNull: false,
          type: Sequelize.STRING(2)           
        },
        token_autorizacao: {
          allowNull: false,
          type: Sequelize.STRING(50)           
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
    await queryInterface.dropTable('tbEnderecos');
  }
};
