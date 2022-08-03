import React from 'react'
import './HomePage.css'

const HomePage = () => {

const google = () =>{
    window.open("http://localhost:5000/auth/google","_self")
}

  return (
    <div className="main_section">
    <div className='main_heading'>Sign In to access the Book App</div>
    <button onClick={google} className='google_button'>Sign In using Google <i class="fa fa-google" aria-hidden="true"></i></button>
    </div>
  )
}

export default HomePage;