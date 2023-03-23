import React from "react";
import SignUpForm from "../components/forms/sign-up";

const SignIn = () => {
    return(
        <main className="main-content stretch">
            <section className="auth-section strech-section">
                <div className="contain">
                    <div className="auth-container">
                        <div className="auth-container-head">
                            <h1>Create An Account</h1>
                            <span className="message">
                                Create your account, it takes less than a minute to join the conversation.
                            </span>
                        </div>
                        <div className="auth-container-body">
                            <SignUpForm />
                        </div>
                        <div className="auth-container-footer column align-c">
                            <a href="/" className="BTN secondary">Already Have An Account</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignIn;