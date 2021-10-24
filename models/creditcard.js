'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CreditCard.belongsTo(models.Person, {
        foreignKey: 'card_id',
      });
    }
  };
  CreditCard.init({
    cardname: DataTypes.STRING,
    cardnbr: DataTypes.STRING,
    expired_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CreditCard',
  });
  return CreditCard;
};