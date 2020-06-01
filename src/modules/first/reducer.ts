import {types} from './actions';
// import storage from 'redux-persist/es/storage';
// import { persistReducer } from 'redux-persist';

const initialState = {
  data: 0,
  spinnerState: {
    loginLoading: false,
  },
};

// const persistConfig = {
//   key: 'first',
//   storage,
//   timeout: 120000,
//   blacklist: ['spinnerState'],
// };

function reducer(state = initialState, action?) {
  switch (action.type) {
    case types.GET_DATA.REQUEST: {
      return {
        ...state,
        spinnerState: {
          ...state.spinnerState,
          dataLoading: true,
        },
      };
    }
    case types.COUNT.SET: {
      console.log('asdasd');
      return {
        ...state,
        data: state.data + 1,
      };
    }
    default:
      return state;
  }
}

export default reducer;
