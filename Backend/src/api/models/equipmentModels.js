const { Model, DataTypes } = require('sequelize');

class Equipment extends Model {
   static init(sequelize) {
    super.init({
        nome_equip: DataTypes.STRING,
        AtivoInativo: DataTypes.STRING,

    }, {
           sequelize,
           tableName: 'tbequipamentos',
    })
    // return this;       
    }
    static associate(models) {
        this.belongsTo(models.Device, { foreignKey: 'CodPk_disp', as: 'device' });
        this.belongsTo(models.Department, { foreignKey: 'CodPk_Setor', as: 'depto' });
    }
    
}


module.exports = Equipment;
