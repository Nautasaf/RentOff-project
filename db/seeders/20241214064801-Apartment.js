'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apartments', [
			{ user_id: 1, rooms: 1, rent: 30000, address: 'Ufa, Kosmonavtov 2, floor 11, a. 142', createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 2, rooms: 2, rent: 40000, address: 'Ufa, Kosmonavtov 28, floor 16, a. 183', createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 3, rooms: 3, rent: 60000, address: 'Ufa, Beringov 44, floor 8, a. 67', createdAt: new Date(), updatedAt: new Date() },
		]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Apartments', null, {});
  }
};
