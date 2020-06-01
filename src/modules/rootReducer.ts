import {combineReducers} from 'redux';

import firstScreenReducer from './first/reducer';

export default combineReducers({
  first: firstScreenReducer,
});
