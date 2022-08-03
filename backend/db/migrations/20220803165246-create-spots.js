'use strict';

const { ref } = require("firebase-functions/v1/database");


module.exports = {
  async up(queryInterface, Sequelize)
  {
    await queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        },
      }, 
      name: { 
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true

      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30)
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
        type:Sequelize.DECIMAL,
        unique: true  
      },

      lng:{
        allowNull: false,
        type:Sequelize.DECIMAL,
        unique: true
      },
      description:{
        allowNull: false,
        type: Sequelize.STRING(30)
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
    });
  },
  async down(queryInterface, Sequelize)
  {
    await queryInterface.dropTable('Spots');
  }
};