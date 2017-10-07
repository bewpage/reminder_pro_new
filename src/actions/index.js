import { SET_REMINDERS, SIGNED_IN, SET_COMPLETED } from "../constants";

export function setReminders(reminders){
    const action = {
        type: SET_REMINDERS,
        reminders
    };
    return action;
}

export function setCompleted(completeReminders){
    const action = {
        type: SET_COMPLETED,
        completeReminders
    };
    return action;
}

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    };
    return action;
}

