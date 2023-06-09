import React from 'react';
import { completeReminderRef } from '../../firebase';
import { Card } from 'react-bootstrap';

const CompleteRemindersItem = ({ completeTask, serverKey }) => {
  const removeReminder = () => {
    const { serverKey } = completeTask;
    completeReminderRef
      .child(serverKey)
      .remove()
      .catch(error => {
        console.log(error);
      });
  };

  const { text, email, nowTime } = completeTask;

  return (
    <li key={serverKey} className="list-unstyled">
      <Card className="mb-2">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <div>
              <strong>{text}</strong>
            </div>
            <div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={removeReminder}></button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
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
        </div>
      </Card>
    </li>
  );
};

export default CompleteRemindersItem;
