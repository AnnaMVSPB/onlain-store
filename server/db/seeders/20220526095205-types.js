'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Types', [
      {name:'Мягкие игрушки', createdAt: new Date(), updatedAt: new Date()},
      {name:'Куклы', createdAt: new Date(), updatedAt: new Date()},
      {name:'Машинки', createdAt: new Date(), updatedAt: new Date()},
      
    ])
  
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Types');
  },
};
