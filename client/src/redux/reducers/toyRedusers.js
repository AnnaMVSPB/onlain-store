import { toyAT } from '../actionTypes/toyAT';

const initialState = {
  allToys: [],
  filterToys: [],
  cart: []
};

export const toyReducer = (state = initialState, action) => {

  switch (action.type) {
    case toyAT.INIT_TOY:
      return {
        ...state, allToys: action.payload.toys, filterToys: action.payload.toys
      };
    case toyAT.SEARCH_TOYS:
      const copyAllToy = [...state.allToys]
      const toyFilter = copyAllToy.filter(toy => toy.name.slice(0, action.payload.length) === action.payload[0].toUpperCase() + action.payload.slice(1))
      return {
        ...state,
        filterToys: toyFilter
      }
    case toyAT.FILTER_TYPE: {
      let copyAllToy = [...state.allToys]
      if (action.payload) {
        const typeFilter = copyAllToy.filter(toy => toy.type_id === +action.payload)
        copyAllToy = typeFilter
      }
      return { ...state, filterToys: copyAllToy }
    }
    case toyAT.ADD_PURCHASE:{

      let copyCart = [...state.cart]
      let newCart = []

      function is(element, index, array) {
        return element.id === action.payload.id
      }
      let includesPurchase = copyCart.some(is)
      if (includesPurchase) {
        newCart = copyCart.map(obj => obj.id === action.payload.id ? { ...obj, amount: obj.amount + 1 } : obj)
      } else {
        newCart = [...copyCart, { ...action.payload, amount: 1 }]
      }
      return { ...state, cart: newCart }
    }
      case toyAT.SUBSTITUTE_PURCHASE : 
      let copyCart = [...state.cart]
      let copyCartFilter=copyCart.filter(obj=> obj.amount > 1 )
      let newCart = copyCartFilter.map(obj =>{
        if( obj.id === action.payload.id){
          return { ...obj, amount: obj.amount - 1 } 
        }else{
          return obj
        }
      })
      return { ...state, cart: newCart }

    default:
      return state;
  }
};
