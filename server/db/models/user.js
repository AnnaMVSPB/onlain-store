'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate({Basket,Rating}) {
      this.hasMany(Basket, { foreignKey: 'user_id' });
      this.hasMany(Rating, { foreignKey: 'user_id_rating' });
    }
  }
  User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
