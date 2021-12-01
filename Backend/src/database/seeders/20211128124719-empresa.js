'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('tbempresas', [{
        empresa: 'Empresa A',
        cnpj: '33.336.888/0001-30',
        responsavel: 'Ricardo Augusto',
        email: 'empresaA@empresas.com.br',
        senha: '123456',
        AtivoInativo: 'A',
        createdAt: '2021/01/01',  
        updatedAt: '2021/01/01'  


      }
    
    ], {});  
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('tbempresas', null, {});
  }
};

