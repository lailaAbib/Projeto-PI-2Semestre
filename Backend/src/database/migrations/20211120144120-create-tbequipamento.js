'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tbEquipamentos', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false, 
         autoIncrement: true,
         primaryKey: true
        },
        nome_equip: {
          allowNull: false,
          type: Sequelize.STRING(50)           
        },
        CodPk_disp: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'tbDispositivos',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        },
        CodPk_setor: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'tbsetors',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
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
    await queryInterface.dropTable('tbEquipamentos');
  }
};
