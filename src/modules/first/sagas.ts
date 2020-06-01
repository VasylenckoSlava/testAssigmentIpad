import {all, takeLatest} from 'redux-saga/effects';
import {types} from './actions';

function* homeRequest() {
  try {
    // your request
  } catch (e) {
    return e;
  }
}

function* rootSaga() {
  yield all([takeLatest(types.GET_DATA.REQUEST, homeRequest)]);
}

export default rootSaga;
