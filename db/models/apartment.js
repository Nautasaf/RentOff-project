'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apartment extends Model {
    static associate(models) {
      Apartment.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Apartment.belongsToMany(models.User, {
        through: "Likes",
        as: 'Users',
        foreignKey: 'apartment_id',
        otherKey: 'user_id'
      })
    }
  }
  Apartment.init({
    user_id: DataTypes.INTEGER,
    rooms: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Apartment',
  });
  return Apartment;
};