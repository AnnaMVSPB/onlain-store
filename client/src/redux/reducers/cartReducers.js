import { cartAT } from '../actionTypes/cartAT';

const initialState = {
  cart: [],
  total: [0],
  totalCost: [0],
  message:''
};

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {

    case cartAT.CART_MESAGE:
      console.log(action.payload)
      return {...state, }
    case cartAT.ADD_PURCHASE: {

      let copyCart = [...state.cart]
      let newCart = []
      let copyTotal = [...state.total]
      let copyTotalCost=[...state.totalCost]
     
      function is(element, index, array) {
        return element.id === action.payload.id
      }
      let includesPurchase = copyCart.some(is)
      if (includesPurchase) {
        copyTotal= +copyTotal[0] + 1 
        copyTotalCost=+copyTotalCost[0] + +action.payload.price
        newCart = copyCart.map(obj => obj.id === action.payload.id ? { ...obj, amount: obj.amount + 1 } : obj)
      } else {
        copyTotal= +copyTotal + 1 
        copyTotalCost=+copyTotalCost + +action.payload.price
        newCart = [...copyCart, { ...action.payload, amount: 1 }]
      }
      return { ...state, cart: newCart, totalCost: [copyTotalCost],total:[copyTotal]}
    }
    case cartAT.SUBSTITUTE_PURCHASE:{
      let copyCart = [...state.cart]
      let copyTotal = [...state.total]
      let copyTotalCost=[...state.totalCost]
      let newCart = copyCart.map(obj => {
        if (obj.id === action.payload.id) {
          copyTotal= +copyTotal[0] - 1 
        copyTotalCost=+copyTotalCost[0] - +action.payload.price
          return { ...obj, amount: obj.amount - 1 }
        } else {
          return obj
        }
      })
      let copyCartFilter = newCart.filter(obj => obj.amount >= 1)
      copyTotal=copyCartFilter.length
      return { ...state, cart: copyCartFilter, totalCost: [copyTotalCost],total:[copyTotal] }
    }
    case cartAT.DELETE_PURCHASE:{
      let copyCart = [...state.cart]
      let copyTotal = [...state.total]
      let copyTotalCost=[...state.totalCost]

      const objDeletePurchase = copyCart.filter(obj => obj.id === action.payload.id)
      const newCart = copyCart.filter(obj => obj.id !== action.payload.id)
      const newTotal= +copyTotal[0] - +objDeletePurchase[0].amount
      const newTotalCost = +copyTotalCost[0] - (+objDeletePurchase[0].price * +objDeletePurchase[0].amount)
      return { ...state, cart: newCart,total: [newTotal], totalCost: [newTotalCost]}
    }
    default:
      return state;
  }
};
