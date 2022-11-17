import React from 'react'

export default function Signup() {
  return (
    <div className = "signup">
      <form className = "sign-in-card">
        <input type = "text" placeholder = "Email id"></input>
        <input type = "password" placeholder = "Password"></input>
        <input type = "password" placeholder = "Confirm Password"></input>
        <button className = "sign-in-btn">Sign Up</button>
      </form>
    </div>
  )
}
