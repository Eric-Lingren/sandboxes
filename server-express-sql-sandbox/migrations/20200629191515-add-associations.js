'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return await queryInterface.addColumn('Tasks', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     * Example:
     * await queryInterface.dropTable('users');
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Tasks', 'userId', { transaction: t })
      ]);
    });
  }
};
