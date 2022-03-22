'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Toys', [
      {name:'Грузовичек', price:500, rating:0, img:'машина3.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {name:'Камаз', price:1000, rating:0, img:'машина1.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {name:'Гоночная машинка', price:750, rating:0, img:'машина2.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {name:'Балерина', price:1500, rating:0, img:'балерина.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {name:'Пупс', price:1000, rating:0, img:'пупс.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {name:'Кен', price:1500, rating:0, img:'кен.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {name:'Единорог', price:2500, rating:0, img:'единорог.jpeg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
      {name:'Медвежонок', price:1800, rating:0, img:'медвежонок.jpg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
      {name:'Пингвинёнок', price:1200, rating:0, img:'пингвин.jpg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
    ])
  
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Toys');
  },
};

