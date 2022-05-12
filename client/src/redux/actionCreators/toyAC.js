import {toyAT} from '../../redux/actionTypes/toyAT'

export const addPurchaseAC = (payload) => {
  return {
    type: toyAT.ADD_PURCHASE,
    payload,
  };
};
 export const subtractPurchaseAC = (payload) => {
   return {
     type: toyAT.SUBSTITUTE_PURCHASE,
     payload
   }
 }

 export const deletePurchaseAC = (payload) => {
  return {
    type: toyAT.DELETE_PURCHASE,
    payload
  }
}
