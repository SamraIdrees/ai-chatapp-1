import React from 'react'
import './SignUp.css'
import email from '../assets/email.png'
import person from '../assets/person.png'
import password from '../assets/password.png'
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div  className='container'>
    <div className="header">
   <div className="text">Sign Up</div>
   <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <img src={person} alt="" />
         <input type="text" placeholder='Name' />  
      </div>
      <div className="input">
        <img src={email} alt="" />
         <input type="email" placeholder='Email Id' />  
      </div>
      <div className="input">
        <img src={password} alt="" />
         <input type="password" placeholder='Password'/>  
      </div>
    </div>
    <div className="submit-signup">Sign Up</div>
    <div className="forgot-password">Already have an account?<Link to="/login">Login!</Link>
    </div>
    <div className="submit-container">
      
    </div>
    </div>
  )
}

export default SignUp