import React, {useState} from "react";
import '../../stylesheets/form.scss';
import {useMutation, gql} from '@apollo/client';
import {useNavigate} from 'react-router-dom';

const SignInForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([{
        email: '',
        password: '',
    }]);

    const SIGN_IN = gql`
    mutation SIGN_IN(
        $email: String!
        $password: String!
    ){
        login(input: { identifier: $email, password: $password }) {
            jwt
        }
    }
    `;

    const [AuthCheck] = useMutation(SIGN_IN, {
        variables: {
            email: user.email,
            password: user.password
        },
        onCompleted: (data) => {
            localStorage.setItem('user', data.login.jwt);
            navigate('/community');
        }
    });

    const SignUserIn = (event) => {
        event.preventDefault();
        console.log('Signing User In');
        AuthCheck();
    }

    return(
        <form className="auth-form sign-in-form column" id="signInForm" name="signInForm" onSubmit={SignUserIn}>
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
                    placeholder="Enter your password"
                    onChange={(e) => {setUser({...user, password: e.target.value})}}
                    required
                />
            </div>
            <div className="actions-container full-width">
                <button className="BTN tertiary" id="signIn" type="submit">Sign In</button>
            </div>
        </form>
    )
}

export default SignInForm;