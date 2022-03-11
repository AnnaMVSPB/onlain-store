'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toy_info extends Model {
  
    static associate({Toy}) {
      this.belongsTo(Toy, { foreignKey: 'toys_id_info' });
    }
  }
  Toys_info.init({
    toy_id_info: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Toy_info',
  });
  return Toy_info;
};
