import React,{useState} from 'react'
import Header from "./Header";

const UploadForm = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDesc] = useState("");
  const [Githublink, setGithub] = useState("");
  const [Creator, setCreator] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
        "Heading": Title,
        "Description":Description,
        "GitHub":Githublink,
        "Creator":Creator
    }
    try{
        const response = fetch("https://prototype-se.herokuapp.com/api/projects/create",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), 
        } )
    }
    catch(err){
      console.log(err);
    }
    // onClick={() => props.onFormSwitch('UploadForm')
  }
  
  return (
    <div className="auth-form-login">
      <Header />
      <div className="card-upload-form">
      <form className="sign-in-card" onSubmit={submitHandler}>
        <input
        value={Title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
        value={Githublink}
          onChange={(e) => setGithub(e.target.value)}
          type="text"
          placeholder="GitHub Link"
        />
        <input
        value={Description}
          onChange={(e) => setDesc(e.target.value)}
          type="text" 
          placeholder="Description"
        />
        <input
        value={Creator}
          onChange={(e) => setCreator(e.target.value)}
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