import React from 'react';
import './Login.css';
import email from '../assets/email.png';
import password from '../assets/password.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email} alt="Email Icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password} alt="Password Icon" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <Link to="/chat" className="submit-signup">Login</Link>
      <div className="forgot-password">
        Don't have an account? <Link to="/signup">Sign Up!</Link>
      </div>
      <div className="submit-container"></div>
    </div>
  );
};

export default Login;
