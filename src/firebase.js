import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const API_KEY =
  process.env.NODE_ENV === 'production'
    ? 'AIzaSyAmD0Wyq0BNAaFMnitS8HU_tUXrkBP4Hbo'
    : process.env.REACT_APP_API_KEY_DEV;

const config = {
  apiKey: API_KEY,
  authDomain: 'reminder-pro-b00a1.firebaseapp.com',
  databaseURL: 'https://reminder-pro-b00a1.firebaseio.com',
  projectId: 'reminder-pro-b00a1',
  storageBucket: 'reminder-pro-b00a1.appspot.com',
  messagingSenderId: '939367473670',
};

const firebaseApp = firebase.initializeApp(config);

const databaseApp = firebaseApp.database();
const authApp = firebaseApp.auth();
const reminderRef = databaseApp.ref('reminders');
const completeReminderRef = databaseApp.ref('completeReminder');

export { authApp, reminderRef, completeReminderRef };
