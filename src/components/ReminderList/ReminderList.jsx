import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reminderRef } from '../../firebase';
import { setReminders } from '../../actions';
import ReminderItem from './../ReminderItem/ReminderItem';
import moment from 'moment';
import Col from 'react-bootstrap/col';

const ReminderList = ({ reminders, setReminders }) => {
  useEffect(() => {
    reminderRef.on('value', snapshot => {
      let reminders = [];
      snapshot.forEach(reminder => {
        const { dueDate, text } = reminder.val();
        const serverKey = reminder.key;
        reminders.push({ dueDate, text, serverKey });
      });
      setReminders(reminders);
    });
  }, []);

  const sortByDate = e => {
    return []
      .concat(e)
      .sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
  };

  const remindersInDateOrder = sortByDate(reminders);

  return (
    <Col sm={6} lg={12}>
      <div>
        <h4 className="">Reminder List</h4>
      </div>
      <ul className="ps-0 list-group">
        {remindersInDateOrder.map((reminder, index) => {
          const { serverKey } = reminder;
          return (
            <ReminderItem reminder={reminder} keyIds={serverKey} key={index} />
          );
        })}
      </ul>
    </Col>
  );
};

function mapStateToProps(state) {
  const { reminders } = state;
  return {
    reminders,
  };
}

export default connect(mapStateToProps, { setReminders })(ReminderList);
