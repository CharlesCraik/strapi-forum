import React from "react";

const SignUpForm = () => {
    return(
        <form className="auth-form sign-up-form column" id="signUpForm" name="signUpForm">
            <div className="field-row">
                <div className="field-container">
                    <label>First Name</label>
                    <input
                        type='text'
                        className="global-input"
                        id="authFirstName"
                        placeholder="Enter your first name"
                        required
                    />
                </div>
                <div className="field-container">
                    <label>Last Name</label>
                    <input
                        type='text'
                        className="global-input"
                        id="authLastName"
                        placeholder="Enter your last name"
                        required
                    />
                </div>
            </div>
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
                    placeholder="Create a password"
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