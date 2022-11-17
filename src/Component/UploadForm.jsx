import React from 'react'
import Header from "./Header";

const UploadForm = () => {
  return (
    <div className="auth-form-login">
      <Header />
      <div className="card-upload-form">
      <form className="sign-in-card">
        <input
          type="text"
          placeholder="Title"
        />
        <input
          type="text"
          placeholder="GitHub Link"
        />
        <input
          type="text"
          placeholder="Description"
        />
        <input
          type="text"
          placeholder="Creator"
        />
        <button
          type="submit"
          className="sign-in-btn"
        >
          Submit
        </button>
      </form>
      </div>
      </div>
  )
}



export default UploadForm