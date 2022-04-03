import {userAT} from '../../redux/actionTypes/userAT'

export const registerUserAC = (payload) => {
  return {
    type: userAT.ADD_USER_SAGA,
    payload,
  };
};

export const loginUserAC = (payload) => {
  return {
    type: userAT.LOG_USER_SAGA,
    payload,
  };
};
