'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toy extends Model {
  
    static associate({Type,Basket_toy,Rating,Toy_info}) {
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.belongsToMany(Basket_toy, { foreignKey: ' toy_id' });
      this.hasMany(Rating, { foreignKey: 'toy_id_rating' });
      this.hasOne(Toy_info, { foreignKey: 'toys_id_info' });
    }
  }
  Toys.init({
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
