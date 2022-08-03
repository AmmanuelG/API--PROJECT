'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        "ownerId": 1,
        "address": "111 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "222 Disney Lane",
        "city": "Sa Francisco",
        "state": "Calfornia",
        "country": "United States of America",
        "lat": 37.7645758,
        "lng": -122.4739327,
        "name": "App Acdemy",
        "description": "Plac where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "333 Disney Lane",
        "city": "San Fracisco",
        "state": "Califonia",
        "country": "United Stat of America",
        "lat": 37.7645351,
        "lng": -122.4790327,
        "name": "App Acmy",
        "description": "Place where web ",
        "price": 123,
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
