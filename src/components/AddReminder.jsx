import React, { Component } from 'react';
import { reminderRef } from '../firebase';
import { connect } from 'react-redux';


class AddReminder extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        });
    };

    submitReminder = (event) => {
        event.preventDefault();
        const { text, dueDate } = this.state;
        reminderRef.push({text, dueDate});
    };

    render(){
        return(
            <div style={{margin: '5px'}}>
                <h4>Add Reminder</h4>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input type="text"
                               className='form-control'
                               placeholder='I have to ...'
                               onChange={event => this.handleAnyInputChange(event, 'text')}
                        />
                        <input type="datetime-local"
                               className='form-control'
                               onChange={event => this.handleAnyInputChange(event, 'dueDate')}
                        />
                        <button className='btn btn-success'
                                type='button'
                                onClick={this.submitReminder}
                        >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}


export default connect(mapStateToProps, null)(AddReminder);