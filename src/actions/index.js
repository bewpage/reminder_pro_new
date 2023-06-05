import { SET_COMPLETED, SET_REMINDERS, SIGNED_IN } from '../constants';

export function setReminders(reminders) {
  return {
    type: SET_REMINDERS,
    reminders,
  };
}

export function setCompleted(completeReminders) {
  return {
    type: SET_COMPLETED,
    completeReminders,
  };
}

export function logUser(email) {
  return {
    type: SIGNED_IN,
    email,
  };
}
