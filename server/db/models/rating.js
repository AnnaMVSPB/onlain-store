'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
  
    static associate({User,Toy}) {
      this.belongsTo(User, { foreignKey: 'user_id_rating' });
      this.belongsTo(Toy, { foreignKey: 'toy_id_rating' });
    }
  }
  Rating.init({
    user_id_rating: DataTypes.INTEGER,
    toy_id_rating: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
