import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED:
      const { completeReminders } = action;
      return completeReminders;
    default:
      return state;
  }
};
