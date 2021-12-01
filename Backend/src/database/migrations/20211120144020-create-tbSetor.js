'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tbSetors', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false, 
         autoIncrement: true,
         primaryKey: true
        },
        CodPk_empresa: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'tbempresas',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        },
        NomeSetor: {
          allowNull: false,
          type: Sequelize.STRING(50)           
        },
        responsavel: {
          allowNull: false,
          type: Sequelize.STRING(60)           
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
    await queryInterface.dropTable('tbSetors');
  }
};
