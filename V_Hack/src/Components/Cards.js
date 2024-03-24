import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  const theme = 'dark';

  return (
    <div className={`cards teal-background ${theme}-theme`}>
      <h1>Enhance Financial Security with FraudShield's Content Analysis and Phishing URLs Tracking and Blocking</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="Images/homecrypto.png"
              text="Navigate the world of cryptocurrency with confidence, detecting potential scams and fraudulent schemes."
              title="Cryptocurrency"
              path='/analysis/cryptocurrency'
              theme={theme}
            />
            <CardItem
              src="Images/imgg2.png"
              text="Get credibility scores for online stock market strategies with FraudShield's advanced content analysis."
              title="Stock Market Strategies"
              path='/analysis/stockmarket'
              theme={theme}
            />
            <CardItem
              src="Images/homephishing.png"
              text="Stay protected from phishing attacks by detecting and blocking malicious links with FraudShield."
              title="Phishing Links Detection"
              path='/analysis/phishing'
              theme={theme}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
