'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Like.belongsTo(models.Apartment, {
        foreignKey: 'apartment_id',
        as: 'apartment'
      })
    }
  }
  Like.init({
    user_id: DataTypes.INTEGER,
    apartment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};