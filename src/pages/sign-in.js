import React from "react";
import SignInForm from "../components/forms/sign-in";

const CreateAccount = () => {
    return(
        <main className="main-content stretch">
            <section className="auth-section strech-section">
                <div className="contain">
                    <div className="auth-container">
                        <div className="auth-container-head">
                            <h1>Sign In</h1>
                            <span className="message">
                                Sign into your account and get involved with the conversation.
                            </span>
                        </div>
                        <div className="auth-container-body">
                            <SignInForm />
                        </div>
                        <div className="auth-container-footer column align-c">
                            <a href="#" className="auth-link">Forgot Password</a>
                            <span className="auth-options-split">or</span>
                            <a href="/create-account" className="BTN secondary">Create an account</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CreateAccount;