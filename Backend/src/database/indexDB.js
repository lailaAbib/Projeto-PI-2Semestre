const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Users = require('../api/models/usersModels.js');
const Address = require('../api/models/AddressModels.js');
const Device = require('../api/models/deviceModels.js');
const Department = require('../api/models/departmentModels.js');
const Equipment = require('../api/models/equipmentModels.js');
const Company = require('../api/models/companyModels.js');


const conexao = new Sequelize(dbConfig);

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!!');
    
} catch (error) {
    console.log('Conexão não estabelecida!!!!', error);
}

// Iniciando as tabelas
Users.init(conexao);
Address.init(conexao);
Device.init(conexao);
Department.init(conexao);
Equipment.init(conexao);
Company.init(conexao);

// Iniciando os relacionamentos
Users.associate(conexao.models);
Address.associate(conexao.models);
Device.associate(conexao.models);
Department.associate(conexao.models);
Equipment.associate(conexao.models);
Company.associate(conexao.models);


module.exports = conexao;

