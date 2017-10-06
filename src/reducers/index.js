import { combineReducers } from 'redux';
import user from './reducer_user';
import reminders from './reducer_reminders';
import completeReminders from './reducer_completed_reminders';

export default combineReducers({
    user,
    reminders,
    completeReminders
});