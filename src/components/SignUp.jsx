import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error:{
                message:''
            }
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        });
    };

    signUp = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.setState({
                    error
                })
            })
    };

    render(){
        return(
            <div className='form-inline'>
                <h2>New User - Sign Up</h2>
                <div className='form-group'>
                    <input type="text"
                           className='form-control'
                           placeholder='email'
                           onChange={event => this.handleAnyInputChange(event, 'email')}
                    />
                    <input type="password"
                           className='form-control'
                           placeholder='password'
                           onChange={event => this.handleAnyInputChange(event, 'password')}
                    />
                    <button className='btn btn-primary'
                            type='button'
                            onClick={this.signUp}
                    >Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Already a user? Sign in instead.</Link></div>
            </div>
        )
    }
}

export default SignUp;