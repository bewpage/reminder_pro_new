import React, { useEffect } from 'react';
import { completeReminderRef } from '../../firebase';
import { setCompleted } from '../../actions/index';
import { connect } from 'react-redux';

import CompleteRemindersItem from './../CompleteRemindersItem/CompleteRemindersItem';

const CompleteReminderList = props => {
  useEffect(() => {
    completeReminderRef.on('value', snap => {
      let completeReminders = [];
      snap.forEach(completeReminder => {
        const { text, email, nowTime } = completeReminder.val();
        const serverKey = completeReminder.key;
        completeReminders.push({ text, email, serverKey, nowTime });
      });
      props.setCompleted(completeReminders);
    });
  }, []);

  return (
    <div className="col-sm-6">
      <h4 className="app_subtitle">Complete Reminder List</h4>
      <div>
        <ul className="list-group">
          {props.completeReminders.map((completeTask, index) => {
            return (
              <CompleteRemindersItem key={index} completeTask={completeTask} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { completeReminders } = state;
  return {
    completeReminders,
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteReminderList);
