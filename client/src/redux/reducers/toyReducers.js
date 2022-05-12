import { toyAT } from '../actionTypes/toyAT';

const initialState = {
  allToys: [],
  filterToys: [],
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
    default:
      return state;
  }
};
