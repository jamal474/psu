import React from "react";
import {Dashboard} from "./Dashboard";
import { Login } from "./Login";
import { Register } from "./Register";
import UploadForm from "./UploadForm";

export default function Sign() {
  const [currentForm, setCurrentForm] = React.useState("login");
  const [user,setUser] = React.useState("");
  const func = (email) => {
    setUser(email);
  }
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const [ele,setEle] = React.useState("");

  return (
    <div>
      {
        (() => {
        if(currentForm === "login")
        {
          return <Login onFormSwitch={toggleForm} setEle = {setEle} />
        }
        else if(currentForm === "register")
        {
          return <Register onFormSwitch={toggleForm}/>
        }
        else if(currentForm === "dashboard")
        {
          return <Dashboard onFormSwitch={toggleForm} ele = {ele}/>
        }
        else if(currentForm === "UploadForm"){
          return <UploadForm onFormSwitch={toggleForm} ele = {ele}/>
        }
      })()
      }
    </div>
  );
}
