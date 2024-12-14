'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Apartment, {
        foreignKey: 'user_id',
        as: 'apartments'
      });
      User.belongsToMany(models.Apartment, {
        through: models.Like,
        as: 'apartmentss',
        foreignKey: 'user_id',
        otherKey: 'apartment_id'
      })
    }
  }
  User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};