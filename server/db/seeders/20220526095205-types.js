'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Types', [
      {id:1,name:'Мягкие игрушки', createdAt: new Date(), updatedAt: new Date()},
      {id:2,name:'Куклы', createdAt: new Date(), updatedAt: new Date()},
      {id:3,name:'Машинки', createdAt: new Date(), updatedAt: new Date()},
      
    ])
  
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Types');
  },
};
