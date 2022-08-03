'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      references:{model:"Users"}
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
     unique:true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lat: {
      allowNull: false,
      type:DataTypes.DECIMAL,

    },
    lng:{
      allowNull: false,
      type:DataTypes.DECIMAL,
      unique: true
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    description:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    price:{
      allowNull: false,
      type: DataTypes.INTEGER 
    }
  }, 
  {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};