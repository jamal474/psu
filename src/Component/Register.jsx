import React, { useState } from "react";
import Header from './Header'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-register">
            <Header/>
            <div className = "card-sign-up">
            <form className="sign-up-card" onSubmit={handleSubmit}>
            <input value={name} name="name" id="name" placeholder="full Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email id" id="email" name="email" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit" className = "sign-in-btn">Sign Up</button>
        </form>
        <div className = "sign-up-text">Already have an account | <a className="sign-up-link" onClick={() => props.onFormSwitch('login')}>Sign In</a></div>
            </div>
    </div>
    )
}