import { takeEvery, put, call } from 'redux-saga/effects';
import {userAT} from '../redux/actionTypes/userAT'
import {toyAT} from '../redux/actionTypes/toyAT'
import { cartAT } from './actionTypes/cartAT';


 
 async function fetchJson(path, options = {}) {
  const responce = await fetch(`${path}`, {
    ...options,
    credentials: 'include',
  });
  const data = await responce.json();
  return data;
}


function* initToy() {
  try {
    const response = yield call(fetchJson, '/api/toy', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
  yield put({type:toyAT.INIT_TOY ,payload:response});
 
  } catch (e) {
    yield put(('Connection error'));
  }
}

function* addUser(action) {
  try {
    const response = yield call(fetchJson, '/api/user/reg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
  
  yield put({type:userAT.ADD_USER ,payload:response});
 
  } catch (e) {
    yield put(('Connection error'));
  }
}

function* logUser(action) {
  try {
    const response = yield call(fetchJson, '/api/user/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
  
  yield put({type:userAT.LOG_USER ,payload:response});
 
  } catch (e) {
    yield put(('Connection error'));
  }
}

function* addCart(action) {
  try {
    const response = yield call(fetchJson, '/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
  
  yield put({type:cartAT.CART_MESAGE ,payload:response});
 
  } catch (e) {
    yield put(('Connection error'));
  }
}

export function* myWatcher() {
  yield takeEvery(toyAT.INIT_TOY_SAGA, initToy);
  yield takeEvery(userAT.ADD_USER_SAGA,addUser);
  yield takeEvery(userAT.LOG_USER_SAGA,logUser);
yield takeEvery(cartAT.ADD_CART_SAGAS,addCart);
}

export default myWatcher;
