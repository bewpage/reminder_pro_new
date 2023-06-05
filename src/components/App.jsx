import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { firebaseApp } from '../firebase';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import ResetPassword from './ResetPassword/ResetPassword';
import ResetSend from './ResetSend';
import { createStore } from 'redux';
import reducer from '../reducers';
import { logUser } from '../actions';

const store = createStore(reducer);

const App = () => {
  let history = useHistory();

  console.log('history', history);
  const signOut = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        const { email } = user;
        // history.push('/app');
        console.log('user has signed in or up', user);
        store.dispatch(logUser(email));
      } else {
        console.log('user has signed out or still needs to sign in.');
        // history.replace('/signin');
      }
    });
  };

  useEffect(() => {
    signOut();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Route path="/app" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/resetsend" component={ResetSend} />
      </Provider>
    </>
  );
};
export default App;
