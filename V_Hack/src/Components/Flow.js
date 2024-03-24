import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Flow.css';

const Flow = () => {
  return (
    <div className='flow-container'>
      <h1 className='process-flow-heading'>FraudShield Content Analysis Process</h1>

      <div className='step'>
        <FontAwesomeIcon icon={faSearch} className='icon' />
        <h2>Step 1: Upload or Enter Content</h2>
        <p>Use FraudShield's content analysis tool to upload or enter the content you want to analyze for online investment fraud.</p>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faChartLine} className='icon' />
        <h2>Step 2: Real-time Analysis</h2>
        <p>FraudShield employs cutting-edge technology for real-time analysis, including fine-tuned AI models and Google SERP analysis.</p>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faLightbulb} className='icon' />
        <h2>Step 3: Receive Credibility Scores</h2>
        <p>Get immediate and contextually relevant assessments of the analyzed content, including credibility scores and detailed reasoning.</p>
      </div>
    </div>
  );
};

export default Flow;
