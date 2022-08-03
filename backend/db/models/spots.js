'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spots.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.VARCHAR(30),
      allowNull: false,
      validate: {
        len: [3, 256],
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      allowNull: false,
      type: Sequelize.STRING(30)
    },
    country: {
      allowNull: false,
      type: Sequelize.STRING(30)
    },
    lat: {
      allowNull: false,
      type:sequelize.DECIMAL,
      unique: true  
    },
    lng:{
      allowNull: false,
      type:sequelize.DECIMAL,
      unique: true
    },
    description:{
      allowNull: false,
      type: Sequelize.STRING,
    },
    price:{
      allowNull: false,
      type: Sequelize.INTEGER 
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, 
  
  
  
  
  {
    sequelize,
    modelName: 'Spots',
  });
  return Spots;
};