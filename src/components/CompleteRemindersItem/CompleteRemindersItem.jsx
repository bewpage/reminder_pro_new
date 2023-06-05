import React from 'react';
import { completeReminderRef } from '../../firebase';

const CompleteRemindersItem = props => {
  const removeReminder = () => {
    const { serverKey } = props.completeTask;
    completeReminderRef.child(serverKey).remove();
  };

  const { text, email, nowTime } = props.completeTask;

  return (
    <div>
      <li className="list-group-item">
        <div className="delete-button" onClick={removeReminder}>
          &#x2715;
        </div>
        <div className="list-group">
          <div className="title-reminder">
            <strong>{text}</strong>
          </div>
          <div>
            <span>
              done at <em>{nowTime}</em>
            </span>
          </div>
          <div>
            <span>
              by <em>{email}</em>
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CompleteRemindersItem;
