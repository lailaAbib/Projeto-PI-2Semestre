const { Model, DataTypes } = require('sequelize');

class Company extends Model {
   static init(sequelize) {
    super.init({
        empresa: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbempresas',
    })

    return this;       
    }
    static associate(models) {
        this.hasMany(models.Department, {foreignKey: 'CodPk_empresa', as: 'company'})   
    }

}

module.exports = Company;
