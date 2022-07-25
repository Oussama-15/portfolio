import React from 'react'
import webImage from '../images/photo-2.png'

function Home() {
  return (
    <div className="alert alert-info mt-5 container" role="alert">
      <img className ="with-border-radius" src="/images/photo-1.jpg" width="150px" alt="photo" />
      <p>Hello my name is Oussama, I'am a Fullstack Web Developper</p>
      <img src={webImage} style={{width: "100%"}} alt="Web"/>
    </div> 
  )
}

export default Home
