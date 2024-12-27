import React from 'react';
import './Prompt.css';
import { Link } from 'react-router-dom';

const Prompt = () => {
  return (
    <div className='container-prompt'>
      <div className="header">
        <div className="text-prompt">Welcome to CareerIT ChatApp</div>
      </div>
      <div className="forgot-password-prompt">Login with your account to continue</div>
      <div className="submit-container">
        <Link to="/login" className="submit">Login</Link>
        <Link to="/signup" className="submit">Sign Up</Link>
      </div>
    </div>
  );
};

export default Prompt;
