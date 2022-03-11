'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {

    static associate({User,Basket_toy}) {
    this.belongsTo(User, { foreignKey: 'user_id' });
    this.hasOne(Basket_toy, { foreignKey: 'basket_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
