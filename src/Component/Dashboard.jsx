import React, { useEffect, useState } from 'react'
import Project from '../project'
import search from '../images/search.png'
import upload from '../images/upload.png'

export const Dashboard = props => {
  const [loadedItems, setLoadedItems] = useState()
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://prototype-se.herokuapp.com/api/projects/all`)
        const responseData = await response.json()
        console.log(responseData)
        setLoadedItems(responseData.items)
      } catch (err) 
      {
        console.log(err)
      }
    }
    fetchProjects()
  }, [])
  if (!!loadedItems) {
    const tile = loadedItems.map((item, index) => {
      console.log(loadedItems)
      return (
        <Project
          key={item.id}
          id={item.id}
          title={item.Heading}
          github={item.GitHub}
          website={item.GitHub}
          description={item.Description}
        />
      )
    })
    return (
      <div className='dashboard'>
        <header className='d-head'>
          <div className='d-name'>Project Help !!</div>
          <div className='u-name'> {props.ele} </div>
          <button
            className='log-out-btn'
            onClick={() => props.onFormSwitch('login')}
          >
            Log Out
          </button>
        </header>
        <div className='function'>
          <form action='' className='form-search'>
            <input
              className='search-input'
              type='text'
              placeholder='Search projects'
            ></input>
            <button className='search-icon'>
              <img src={search} />
            </button>
          </form>
          <div onClick={() => props.onFormSwitch('UploadForm')} className = "upload"><h2>Upload</h2><img src = {upload} className = "upload-icon"/></div>
            
        </div>
        <main className='d-main'>{tile}</main>
      </div>
    )
  }
}
