'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket_toy extends Model {
   
    static associate() {

    }
  }
  Basket_toy.init({
    toy_id: DataTypes.INTEGER,
    basket_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket_toy',
  });
  return Basket_toy;
};
