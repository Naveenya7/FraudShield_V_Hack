import React from 'react';
import './AboutUs.css'; // You can define your styles in AboutUs.css file
import Footer from '../Footer';
import Navbar from '../Navbar';


const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='about-us-container'>
      <h1 className='about-us-heading'>About Us</h1>
      <p className='about-us-text'>
        FraudShield is a leading provider of online security solutions, dedicated to protecting individuals and businesses from financial fraud and cyber threats. Our mission is to empower users with advanced tools and technologies to navigate the digital landscape with confidence.
      </p>
      <p className='about-us-text'>
        At FraudShield, we leverage cutting-edge AI models and real-time analysis to combat online investment fraud and phishing attacks. Our content analysis tool provides users with immediate and contextually relevant assessments of online content, while our phishing link detection feature intercepts and blocks harmful links to safeguard personal and financial information.
      </p>
      <p className='about-us-text'>
        We are committed to delivering superior protection and peace of mind to our users, ensuring a secure online experience for all.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
