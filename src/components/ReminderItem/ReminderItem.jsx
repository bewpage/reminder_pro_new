import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { reminderRef, completeReminderRef } from '../../firebase';
import { Card } from 'react-bootstrap';

const ReminderItem = ({ reminder, user, keyIds }) => {
  const completeReminder = () => {
    const { email } = user;
    const { text, serverKey } = reminder;
    const nowTime = moment().toString();

    reminderRef
      .child(serverKey)
      .remove()
      .catch(error => {
        console.log(error);
      });
    completeReminderRef.push({ email, text, nowTime });
  };

  const { dueDate, text } = reminder;
  const { email } = user;

  const alertTest = useCallback(
    date => {
      if (moment().isSameOrBefore(date)) {
        return 'border border-success';
      } else {
        return 'border border-danger';
      }
    },
    [dueDate]
  );

  return (
    <li key={keyIds} className="list-unstyled">
      <Card className={`mb-2 ${alertTest(dueDate)}`}>
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
                onClick={completeReminder}></button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
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
        </div>
      </Card>
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
