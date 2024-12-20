'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apartments', [
			{ user_id: 1, rooms: 1, area: 35, rent: 30000, floor: 7, maxFloor: 24, address: 'Республика Башкортостан, г.Уфа, ул. Космонавтов 182', description: 'Просторная однокомнатная квартира в самом центре черниковки. Из техники всё имеется', image: '/images/1.jpg', createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 2, rooms: 2, area: 48, rent: 40000, floor: 4, maxFloor: 5, address: 'Республика Башкортостан, г.Уфа, ул. Ульяновых 54', description: 'Сдам семейной паре. Счетчики уже входят в арендную плату', image: '/images/2.jpg', createdAt: new Date(), updatedAt: new Date() },
			{ user_id: 3, rooms: 3, area: 55, rent: 60000, floor: 11, maxFloor: 18, address: 'Республика Башкортостан, г.Уфа, ул. Берингов 37', description: 'Риелторов прошу не беспокоить! Евроремонт, вся техника новая.', image: '/images/3.jpg', createdAt: new Date(), updatedAt: new Date() },
		]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Apartments', null, {});
  }
};
