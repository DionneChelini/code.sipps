import { SET_ALERT, REMOVE_ALERT } from '../types';

const alerts = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alerts;
