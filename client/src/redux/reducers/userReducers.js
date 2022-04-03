import { userAT } from '../actionTypes/userAT';

const initialState = {
  message: '', // Для отображения ошибок логин, рега
  user: {}
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case userAT.ADD_USER:
      console.log(action.payload)
      localStorage.setItem('user', action.payload.email)
      return {
        ...state, user: action.payload
      };

    case userAT.LOG_USER:
      console.log(action.payload)
      localStorage.setItem('user', action.payload.email)
      return {
        ...state, user: action.payload
      };
    default:
      return state;
  }
};
