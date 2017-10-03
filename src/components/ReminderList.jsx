import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { reminderRef } from "../firebase";
import { setReminders } from "../actions/index";
import ReminderItem from "./ReminderItem";
import moment from 'moment';

class ReminderList extends Component{

    componentDidMount(){
        reminderRef.on('value', snap => {
            let reminders = [];
            snap.forEach(reminder => {
                const { dueDate, text } = reminder.val();
                reminders.push({dueDate, text});
            });
            this.props.setReminders(reminders);
        })
    }

    sortByDate(e){
        // const reminders = this.props.reminders;
        // console.log('old reminders', reminders);
        const newReminders = [].concat(e).sort((a, b) => moment.utc(a.dueDate).diff(moment.utc(b.dueDate)));
        console.log('sorted newReminders', newReminders);
        return newReminders;
    };

    render(){
        // console.log('this.props.reminders', this.props.reminders);
        const remindersArray = this.props.reminders
        const remindersInDateOrder = this.sortByDate(remindersArray);
        console.log('remindersInDateOrder', remindersInDateOrder);
        return(
            <div style={{margin: '5px'}}>
                <h4>Reminder List</h4>
                <div className='row'>
                    <ul className='list-group col-sm-4'>
                        {
                            remindersInDateOrder.map((reminder, index) => {
                                return (
                                        <ReminderItem key={index} reminder={reminder} />
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