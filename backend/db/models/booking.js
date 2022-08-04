'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) =>
{
  class Booking extends Model
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //Booking
    static associate(models)
    {
    
      Booking.belongsTo(models.User, { foreignKey: 'userId' })
      Booking.belongsTo(models.Spot, { foreignKey: 'spotId' })
    }
  }
  Booking.init({
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    spotId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    startDate: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    endDate: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }

  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Booking;
};