'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
   return await queryInterface.bulkInsert('Tasks', [
    {
      name: 'task 1',
      description: 'task 1 description',
      isComplete: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'task 2',
      description: 'task 2 description',
      isComplete: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
