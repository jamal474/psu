import React from 'react'

export default function Signin(props) {

  function signpage() {
    props.setSign("false");
  }

  return (
    <div className = "signup">
      <form className = "sign-in-card">
        <input type = "text" placeholder = "Email id"></input>
        <input type = "password" placeholder = "Password"></input>
        <button className = "sign-in-btn">Sign In</button>
      </form>
      <div className = "sign-up-text">Don't have an Account, <a onClick = {signpage} className = "sign-up-link">Sign-up</a></div>
    </div>
  )
}
