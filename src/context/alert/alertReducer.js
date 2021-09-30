import { SET_ALERT, REMOVE_ALERT } from '../types';

const alerts = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [action.payload];
    case REMOVE_ALERT:
      return;
    default:
      return state;
  }
};

export default alerts;
