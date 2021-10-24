'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.Province, {
        foreignKey: 'prov_code',
        targetKey: 'prov_code'
      });
    }
  };
  City.init({
    prov_code: DataTypes.STRING,
    city_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};