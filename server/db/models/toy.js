'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toy extends Model {
  
    static associate({Type,Basket_toy,Rating,Toy_info,Basket}) {
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.hasMany(Rating, { foreignKey: 'toy_id_rating' });
      this.hasOne(Toy_info, { foreignKey: 'toy_id_info' });
      this.belongsToMany(Basket, { through: Basket_toy, foreignKey: 'toy_id', otherKey: 'basket_id' });
    }
  }
  Toy.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Toy',
  });
  return Toy;
};
