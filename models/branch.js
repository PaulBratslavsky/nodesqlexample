'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.belongsTo(models.Company, {
        foreignKey: 'company_id'
      });
    }
  };
  Branch.init({
    company_id: DataTypes.INTEGER,
    branch_name: DataTypes.STRING,
    branch_address: DataTypes.STRING,
    branch_city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};