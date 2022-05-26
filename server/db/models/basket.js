'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {

    static associate({User,Basket_toy,Toy}) {
    this.belongsTo(User, { foreignKey: 'user_id' });
    this.belongsToMany(Toy, { through: Basket_toy, foreignKey: 'basket_id', otherKey: 'toy_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    total_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
