import React from "react";
import '../../stylesheets/form.scss';

const SignInForm = () => {
    return(
        <form className="auth-form sign-in-form column" id="signInForm" name="signInForm">
            <div className="field-container">
                <label>Email</label>
                <input
                    type='email'
                    className="global-input"
                    id="authEmail"
                    placeholder="Enter your email address"
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