import React from 'react';
import './Hero.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Combat Financial Fraud with FraudShield</h1>
      <p>Empowering users to navigate the digital landscape securely.</p>
      <div className='hero-btns'>
        <Link to='/sign-up' className='btns'>
          <Button buttonStyle='btn--outline teal-button' buttonSize='btn--large'>
            Sign Up for Protection
          </Button>
        </Link>
        <Link to='/howitworks'>
          <Button className='btns' buttonStyle='btn--primary dark-teal-button' buttonSize='btn--large'>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
