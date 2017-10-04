import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import {firebaseApp} from "./firebase";
import reducer from './reducers';
import { logUser } from './actions';


import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './index.css';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        const { email } = user;
        // console.log('user has signed in or up', user);
        // console.log('emial from DB', email);
        browserHistory.push('/app');
        store.dispatch(logUser(email));
    }else{
        // console.log('user has signed out or still needs to sign in.');
        browserHistory.replace('/signin');
    }
});


ReactDOM.render(
    <Provider store={store}>
        <Router path='/' history={browserHistory}>
            <Route path='/app' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </Router>
    </Provider>, document.getElementById('root'));