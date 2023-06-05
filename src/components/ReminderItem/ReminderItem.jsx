import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { completeReminderRef, reminderRef } from '../../firebase';

const ReminderItem = props => {
  const completeReminder = () => {
    const { email } = props.user;
    const { text, serverKey } = props.reminder;
    const nowTime = moment().toString();

    reminderRef.child(serverKey).remove();
    completeReminderRef.push({ email, text, nowTime });
  };

  const { dueDate, text } = props.reminder;
  const { email } = props.user;

  return (
    <li className="list-group-item">
      <div className="delete-button" onClick={completeReminder}>
        &#x2715;
      </div>
      <div className="list-group">
        <div className="title-reminder">
          <strong>{text}</strong>
        </div>
        <div>{moment(dueDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</div>
        <div>
          <em>{moment(dueDate).fromNow()}</em>
        </div>
        <div>
          <span>
            submitted by <em>{email}</em>
          </span>
        </div>
      </div>
    </li>
  );
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(ReminderItem);
