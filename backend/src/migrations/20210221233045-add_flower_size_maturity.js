'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('flowers', 'size', {
              type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.addColumn('flowers', 'maturity', {
              type: Sequelize.STRING,
          }, { transaction: t })
      ])
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.removeColumn('flowers', 'size', { transaction: t }),
          queryInterface.removeColumn('flowers', 'maturity', { transaction: t })
      ])
  })
  }
};
