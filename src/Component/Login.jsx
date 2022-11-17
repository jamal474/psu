import React, { useState } from "react";
import Header from "./Header";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-login">
      <Header />
      <div className="card-sign-in">
        <form className="sign-in-card" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email id"
            id="email"
            name="email"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button
            type="submit"
            onClick={() => {
              props.setEle(email);
              props.onFormSwitch("dashboard");
            }}
            className="sign-in-btn"
          >
            Sign In
          </button>
        </form>
        <div className="sign-up-text">
          Don't have an account |{" "}
          <a
            className="sign-up-link"
            onClick={() => props.onFormSwitch("register")}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
