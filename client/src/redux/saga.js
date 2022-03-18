import { takeEvery, put, call } from 'redux-saga/effects';

import {toyAT} from '../redux/actionTypes/toyAT'

 const HOST = 'http://localhost:7000';
 async function fetchJson(path, options = {}) {
  const responce = await fetch(`${HOST}${path}`, {
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


export function* myWatcher() {
  yield takeEvery(toyAT.INIT_TOY_SAGA, initToy);

}

export default myWatcher;
