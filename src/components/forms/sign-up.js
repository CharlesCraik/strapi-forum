import React, {useState} from "react";
import '../../stylesheets/form.scss';
import {useMutation, gql} from '@apollo/client';
import {useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([{
        username: '',
        email: '',
        password: ''
    }]);

    const CREATE_ACCOUNT = gql`
    mutation CREATE_ACCOUNT(
        $email: String!
        $password: String!
        $username: String!
    ){
        register(input: { username: $username, email: $email, password: $password }) {
            jwt
            user {
                username
                email
            }
        }
    }
    `;
    const [SignUp, { data, error }] = useMutation(CREATE_ACCOUNT, {
        variables: {
            username: user.username,
            email: user.email,
            password: user.password
        },
        onCompleted: (data) => {
            localStorage.setItem('user', data.register.jwt);
            navigate('/community');
        }
        
    });

    const CreateNewAccount = (event) => {
        event.preventDefault();
        //console.log(user);
        SignUp();
    }

    return(
        <form className="auth-form sign-up-form column" id="signUpForm" name="signUpForm" onSubmit={CreateNewAccount}>
            <div className="field-container">
                <label>Username</label>
                <input
                    type='text'
                    className="global-input"
                    id="authUsername"
                    placeholder="Create your username"
                    onChange={(e) => {setUser({...user, username: e.target.value})}}
                    required
                />
            </div>
            <div className="field-container">
                <label>Email</label>
                <input
                    type='email'
                    className="global-input"
                    id="authEmail"
                    placeholder="Enter your email address"
                    onChange={(e) => {setUser({...user, email: e.target.value})}}
                    required
                />
            </div>
            <div className="field-container">
                <label>Password</label>
                <input
                    type='password'
                    className="global-input"
                    id="authPassword"
                    placeholder="Create a password"
                    onChange={(e) => {setUser({...user, password: e.target.value})}}
                    required
                />
            </div>
            <div className="actions-container full-width">
                <button className="BTN tertiary" id="signUp" type='submit'>Create My Account</button>
            </div>
        </form>
    )
}

export default SignUpForm;