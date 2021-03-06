'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person.init({
    fullname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    card_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};