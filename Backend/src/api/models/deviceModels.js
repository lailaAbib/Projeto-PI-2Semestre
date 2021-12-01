const { Model, DataTypes } = require('sequelize');

class Device extends Model {
   static init(sequelize) {
    super.init({
        nome: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbdispositivos',
    })

    return this;       
    }
    static associate(models) {
        this.hasMany(models.Equipment, {foreignKey: 'CodPk_disp', as: 'devices'})   
    }

}

module.exports = Device;
