const { Basket, Basket_toy } = require('../db/models');

const addCart = async (reg, res) => {
  const { cart, totalCost, user } = reg.body;
  console.log('sdfghjkl',totalCost[0])
  const basketCreate = await Basket.create({ user_id: user.id, total_cost: totalCost[0] });
  const basketToyCreate = cart.map(el => {
   Basket_toy.create({ toy_id: el.id, basket_id: basketCreate.id, quantity_of_goods:el.amount})
  })
  res.status(201).json({message:'Ваш заказ получен в обработку'});

}
const initOrders = async (reg, res) => {
  const { } = reg.body;


}


module.exports = { addCart, initOrders };
