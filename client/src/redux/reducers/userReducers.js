import { } from '../actionTypes/userAT';

const initialState = {
  login: false,
  message: '', // Для отображения ошибок логин, рега
  userId: '',
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    // case userAT.NEW_USER:
    //   return {
    //     ...state,
    //     login: action.payload.login,
    //     message: '',
    //     userId: action.payload.userId,
    //   };

    default:
      return state;
  }
};
