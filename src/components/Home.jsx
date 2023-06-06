import React from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { AuthContext } from './AuthValidation/context';

import AddReminder from './AddReminder/AddReminder';
import ReminderList from './ReminderList/ReminderList';
import CompleteReminderList from './CompleteReminderList/CompleteReminderList';

const Home = () => {
  const signOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <div>
      <div className="container app_header">
        <h3 className="app-title">
          <strong>Reminder Pro New</strong>
        </h3>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <AddReminder />
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <ReminderList />
          <CompleteReminderList />
        </div>
        <hr />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(Home);
