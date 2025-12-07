'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      { name: 'NodeJs',      createdAt: new Date(), updatedAt: new Date() },
      { name: 'ReactJs',     createdAt: new Date(), updatedAt: new Date() },
      { name: 'MongoDB',     createdAt: new Date(), updatedAt: new Date() },
      { name: 'Flutter',     createdAt: new Date(), updatedAt: new Date() },
      { name: 'ReactNativ',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Laravel',     createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};

