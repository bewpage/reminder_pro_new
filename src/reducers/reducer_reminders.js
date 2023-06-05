import { SET_REMINDERS } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_REMINDERS:
      const { reminders } = action;
      return reminders;
    default:
      return state;
  }
};
