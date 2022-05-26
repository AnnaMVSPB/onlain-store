import { userAT } from '../actionTypes/userAT';

const initialState = {
  message: '', // Для отображения ошибок логин, рега
  user: {}
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case userAT.ADD_USER:
      localStorage.setItem('user', action.payload.id)
      return {
        ...state, user: action.payload
      };

    case userAT.LOG_USER: 
      localStorage.setItem('user', action.payload.id)
      return {
        ...state, user: action.payload
      };

      case userAT.LOGOUT_USER:
        localStorage.removeItem('user')
        return {
          ...state, user: {}
        };
    default:
      return state;
  }
};
