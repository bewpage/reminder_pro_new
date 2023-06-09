import React, { useEffect } from 'react';
import { completeReminderRef } from '../../firebase';
import { setCompleted } from '../../actions/index';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

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
    <Col sm={6} lg={12}>
      <div>
        <h4>Complete Reminder List</h4>
      </div>
      <div>
        <ul className="ps-0 list-group">
          {props.completeReminders.map((completeTask, index) => {
            return (
              <CompleteRemindersItem key={index} completeTask={completeTask} />
            );
          })}
        </ul>
      </div>
    </Col>
  );
};

function mapStateToProps(state) {
  const { completeReminders } = state;
  return {
    completeReminders,
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteReminderList);
