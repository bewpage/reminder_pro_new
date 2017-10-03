import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reminderRef } from "../firebase";
import { setReminders } from "../actions/index";
import ReminderItem from "./ReminderItem";

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

    render(){
        // console.log('this.props.reminders', this.props.reminders);
        return(
            <div style={{margin: '5px'}}>
                <h4>Reminder List</h4>
                <div className='row'>
                    <ul className='list-group col-sm-4'>
                        {
                            this.props.reminders.map((reminder, index) => {
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