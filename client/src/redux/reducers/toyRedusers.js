import {toyAT } from '../actionTypes/toyAT';

const initialState = {
allToys:[]
};

export const toyReducer = (state = initialState, action) => {

  switch (action.type) {
    case toyAT.INIT_TOY:
          return {
        ...state,allToys:action.payload.toys
      };

    default:
      return state;
  }
};
