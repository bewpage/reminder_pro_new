import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { reminderRef } from '../../firebase';
import { setReminders } from '../../actions';
import ReminderItem from './../ReminderItem/ReminderItem';
import moment from 'moment';

const ReminderList = props => {
  const refs = useRef([]);

  useEffect(() => {
    reminderRef.on('value', snap => {
      let reminders = [];
      snap.forEach(reminder => {
        const { dueDate, text } = reminder.val();
        const serverKey = reminder.key;
        reminders.push({ dueDate, text, serverKey });
      });
      props.setReminders(reminders);
    });
    renderAlert();
  }, []);

  // componentDidUpdate() {
  //   this.renderAlert();
  // }

  const sortByDate = e => {
    return []
      .concat(e)
      .sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
  };

  const renderAlert = () => {
    let newRemindersAlert = props.reminders;

    // TODO fir that alert
    newRemindersAlert.map(date => {
      let id = date.serverKey;
      let reminderDate = date.dueDate;
      let liElement = ReactDOM.findDOMNode(refs[id]);
      console.log('liElement', refs);
      // if (moment().isSameOrBefore(reminderDate)) {
      //   return liElement.setAttribute('class', 'list-group-item green');
      // } else {
      //   return liElement.setAttribute('class', 'list-group-item alert');
      // }
    });
  };

  const remindersArray = props.reminders;
  const remindersInDateOrder = sortByDate(remindersArray);

  return (
    <div className="col-sm-6">
      <h4 className="app_subtitle">Reminder List</h4>
      <div>
        <ul className="list-group">
          {remindersInDateOrder.map((reminder, index) => {
            const { serverKey } = reminder;
            console.log('serverKey', serverKey);
            return (
              <ReminderItem key={index} reminder={reminder} refs={serverKey} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { reminders } = state;
  return {
    reminders,
  };
}

export default connect(mapStateToProps, { setReminders })(ReminderList);
