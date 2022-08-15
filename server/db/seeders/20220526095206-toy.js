'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Toys', [
      {id:1,name:'Грузовичек', price:500, rating:0, img:'машина3.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {id:2,name:'Камаз', price:1000, rating:0, img:'машина1.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {id:3,name:'Гоночная машинка', price:750, rating:0, img:'машина2.jpg', type_id:3,createdAt: new Date(), updatedAt: new Date()},
      {id:4,name:'Балерина', price:1500, rating:0, img:'балерина.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {id:5,name:'Пупс', price:1000, rating:0, img:'пупс.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {id:6,name:'Кен', price:1500, rating:0, img:'кен.jpg', type_id:2,createdAt: new Date(), updatedAt: new Date()},
      {id:7,name:'Единорог', price:2500, rating:0, img:'единорог.jpeg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
      {id:8,name:'Медвежонок', price:1800, rating:0, img:'медвежонок.jpg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
      {id:9,name:'Пингвинёнок', price:1200, rating:0, img:'пингвин.jpg', type_id:1,createdAt: new Date(), updatedAt: new Date()},
    ])
  
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Toys');
  },
};
