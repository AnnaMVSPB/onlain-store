import {cartAT} from '../actionTypes/cartAT'

export const addPurchaseAC = (payload) => {
  return {
    type: cartAT.ADD_PURCHASE,
    payload,
  };
};
 export const subtractPurchaseAC = (payload) => {
   return {
     type: cartAT.SUBSTITUTE_PURCHASE,
     payload
   }
 }

 export const deletePurchaseAC = (payload) => {
  return {
    type: cartAT.DELETE_PURCHASE,
    payload
  }
}
 export const addCartSagasAC = (payload) => {
   return {
     type:cartAT.ADD_CART_SAGAS,
     payload
   }
 }
