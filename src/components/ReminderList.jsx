import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { reminderRef } from "../firebase";
import { setReminders } from "../actions";
import ReminderItem from "./ReminderItem";
import moment from 'moment';

class ReminderList extends Component{

    componentDidMount(){
        reminderRef.on('value', snap => {
            let reminders = [];
            snap.forEach(reminder => {
                const { dueDate, text } = reminder.val();
                const serverKey = reminder.key;
                reminders.push({dueDate, text, serverKey});
            });
            this.props.setReminders(reminders);
        });
    }

    componentDidUpdate(){
        this.renderAlert();
    }


    sortByDate(e){
        let newReminders = [].concat(e).sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
        return newReminders;
    };

    renderAlert(){
        let newRemindersAlert = this.props.reminders;

        newRemindersAlert.map(date => {
            let id = date.serverKey;
            let reminderDate = date.dueDate;
            let liElement = ReactDOM.findDOMNode(this.refs[id]);
            // console.log('liElement', liElement);
            if(moment().isSameOrBefore(reminderDate)){
                return liElement.setAttribute('class', 'list-group-item green');
            }
            else{
                return liElement.setAttribute('class', 'list-group-item alert');
            }
        });
    }


    render(){
        const remindersArray = this.props.reminders;
        const remindersInDateOrder = this.sortByDate(remindersArray);
        return(
            <div className='col-sm-6'>
                <h4 className='app_subtitle'>Reminder List</h4>
                <div>
                    <ul className='list-group'>
                        {
                            remindersInDateOrder.map((reminder, index) => {
                                const { serverKey } = reminder;
                                return (
                                        <ReminderItem key={index}
                                                      reminder={reminder}
                                                      ref={serverKey}
                                        />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { reminders } = state;
    return {
        reminders
    }
}

export default connect(mapStateToProps, { setReminders })(ReminderList);