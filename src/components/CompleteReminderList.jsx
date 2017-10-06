import React, { Component, } from 'react';
import {completeReminderRef} from "../firebase";
import { setCompleted } from "../actions/index";
import { connect } from 'react-redux';

import CompleteRemindersItem from './CompleteRemindersItem';


class CompleteReminderList extends Component {

    componentDidMount(){
        completeReminderRef.on('value', snap => {
            let completeReminders = [];
            snap.forEach(completeReminder => {
                const { text, email, nowTime } = completeReminder.val();
                const serverKey = completeReminder.key;
                completeReminders.push({ text, email, serverKey, nowTime});
            });
            // console.log('completeReminders', completeReminders);
            this.props.setCompleted(completeReminders);

        });
    }





    render(){
        console.log('this.props.completeReminders', this.props.completeReminders);
        return(
            <div className='list-group col-sm-6'>
                <h4>Complete Reminder List</h4>
                <div>
                    <ul>
                        {
                            this.props.completeReminders.map((completeTask, index) => {
                                return (
                                    <CompleteRemindersItem key={index}
                                                           completeTask={completeTask}
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
    const { completeReminders } = state;
    return {
        completeReminders
    }
}

export default connect(mapStateToProps, { setCompleted }) (CompleteReminderList);