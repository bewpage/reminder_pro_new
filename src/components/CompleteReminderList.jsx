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
            this.props.setCompleted(completeReminders);

        });
    }





    render(){
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