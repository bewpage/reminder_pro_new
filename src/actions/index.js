import { SET_REMINDERS, SIGNED_IN, SET_COMPLETED } from "../constants";

export function setReminders(reminders){
    const action = {
        type: SET_REMINDERS,
        reminders
    };
    console.log('action in setReminders', action);
    return action;
}


export function setCompleted(completeReminders){
    const action = {
        type: SET_COMPLETED,
        completeReminders
    };
    console.log('action in setCompleted', action);
    return action;
}

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    };
    console.log('action in loguser', action);
    return action;
}

