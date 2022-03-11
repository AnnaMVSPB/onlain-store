'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
  
    static associate({Toy}) {
      this.hasMany(Toy, { foreignKey: 'type_id' });
    }
  }
  Type.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
