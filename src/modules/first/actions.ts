export const types = {
  GET_DATA: {
    REQUEST: 'GET_DATA.REQUEST',
    SUCCESS: 'GET_DATA.SUCCESS',
    FAILURE: 'GET_DATA.FAILURE',
  },
  COUNT: {
    SET: 'COUNT.SET',
  },
};

export function getDataRequest(payload) {
  return {
    type: types.GET_DATA.REQUEST,
    payload,
  };
}

export function clickCounter() {
  return {
    type: types.COUNT.SET,
  };
}
