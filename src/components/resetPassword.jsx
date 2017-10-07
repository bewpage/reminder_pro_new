import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from "../firebase";
import { browserHistory } from 'react-router';

class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            error: {
                message: ''
            }
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        });
    };

    submitReset = (event) => {
        event.preventDefault();
        const { email } = this.state;
        console.log('email', email);
        firebaseApp.auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log('email with password reset was send to: ', email);
                browserHistory.push('/resetsend');
            })
            .catch(error => {
                console.log('error', error);
                this.setState({
                    error
                })
            })
    };


    render(){
        return(
            <div>
                <h4>Reset Password</h4>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input type="email"
                               placeholder='email'
                               className='form-control'
                               onChange={event => this.handleAnyInputChange(event, 'email')}

                        />
                        <button className='btn btn-success'
                                type='button'
                                onClick={this.submitReset}
                        >Submit</button>
                    </div>
                    <div><Link to={'/signin'}>Already a user? Sign in instead.</Link></div>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}


export default ResetPassword;