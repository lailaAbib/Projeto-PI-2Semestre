const { Model, DataTypes } = require('sequelize');

class Address extends Model {
   static init(sequelize) {
    super.init({
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        bairro: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        UF: DataTypes.STRING,
        token_autorizacao: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbenderecos',
    })
    // return this;       
    }
    static associate(models) {
        this.belongsTo(models.Users, { foreignKey: 'CodPk_Users', as: 'users' });
    }
    
}

module.exports = Address;
