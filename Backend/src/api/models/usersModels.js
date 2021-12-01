const { Model, DataTypes } = require('sequelize');

class Users extends Model {
   static init(sequelize) {
    super.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbusers',
    })

    return this;       
    }
    static associate(models) {
        this.hasMany(models.Address, {foreignKey: 'CodPk_Users', as: 'adressess'})   
    }

}

module.exports = Users;
