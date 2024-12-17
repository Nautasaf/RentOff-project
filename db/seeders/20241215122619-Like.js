'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
			{ user_id: 1, apartment_id: 1, createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 1, apartment_id: 2, createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 1, apartment_id: 3, createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 2, apartment_id: 1, createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 2, apartment_id: 2, createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 3, apartment_id: 1, createdAt: new Date(), updatedAt: new Date() },
		]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
