const { Model, DataTypes } = require('sequelize');

class Department extends Model {
   static init(sequelize) {
    super.init({
        nomeSetor: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbsetors',
    })

    return this;       
    }
    static associate(models) {
        this.hasMany(models.Equipment, {foreignKey: 'CodPk_setor', as: 'setores'})   
        this.belongsTo(models.Company, { foreignKey: 'CodPk_empresa', as: 'empresa'});
    }

}

module.exports = Department;
