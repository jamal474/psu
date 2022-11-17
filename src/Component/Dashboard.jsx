import React, { useState } from "react";
import data from '../data.js'
import Project from '../project'
import search from '../images/search.png'
import upload from '../images/upload.png'

export const Dashboard = (props) => {

  const tile = data.map((item,index) => {
    return (
        <Project 
            key = {item.index}
            id = {item.id}
            title = {item.title}
            github = {item.github}
            website ={item.website}
            description = {item.description}
            imageUrl = {item.imageUrl}
        />
    )
})
 return (
        <div className="dashboard">
            <header className = "d-head">
              <div className = "d-name">Project Help !!</div>
              <div className = "u-name"> {props.ele} </div>
              <button className = "log-out-btn" onClick={() => props.onFormSwitch('login')}>Log Out</button>
            </header>
            <div className = "function">
              <form action = "" className = "form-search">
                <input className = "search-input" type = "text" placeholder = "Search projects"></input>
                <button className = "search-icon"><img src = {search}/></button>
              </form>
              <div className = "upload"><h2>Upload</h2><img src = {upload} className = "upload-icon"/></div>
            </div>
            <main className = "d-main">
                {tile}
            </main>
        </div>
    )
}