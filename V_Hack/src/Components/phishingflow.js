import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShieldAlt, faBan } from '@fortawesome/free-solid-svg-icons';
import './Phishingflow.css';

const Phishingflow = () => {
  return (
    <div className='flow-container'>
      <h1 className='process-flow-heading'>FraudShield Phishing URL Tracking and Blocking Process</h1>

      <div className='step'>
        <FontAwesomeIcon icon={faEye} className='icon' />
        <h2>Step 1: Phishing URL Detection</h2>
        <p>FraudShield's dedicated Chrome extension continuously monitors for phishing URLs embedded in emails, SMS, and other messages.</p>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faShieldAlt} className='icon' />
        <h2>Step 2: Alert Users</h2>
        <p>When users encounter potentially harmful phishing links, FraudShield intercepts and alerts them in real-time, ensuring awareness of the threat.</p>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faBan} className='icon' />
        <h2>Step 3: Block Navigation</h2>
        <p>FraudShield proactively blocks navigation to deceptive links, preventing users from accessing them and safeguarding their personal and financial information.</p>
      </div>
    </div>
  );
};

export default Phishingflow;
