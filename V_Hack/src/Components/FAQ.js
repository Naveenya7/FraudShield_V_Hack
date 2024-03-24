import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'How does FraudShield protect against online fraud?',
      answer: 'FraudShield employs cutting-edge technology, including advanced and fine-tuned AI models and real-time analysis, to combat online investment fraud. By providing immediate and contextually relevant assessments of online content, including text, images, and URLs, FraudShield empowers users to make informed decisions and safeguards their personal and financial information.',
      isOpen: false
    },
    {
      question: 'What types of phishing attacks does FraudShield detect and block?',
      answer: 'FraudShield focuses on identifying and blocking homograph and other phishing links, common tactics used by cybercriminals to deceive users. Through a dedicated Chrome extension, FraudShield intercepts and alerts users when they encounter potentially harmful phishing links embedded in emails, SMS, or other messages, preventing them from falling victim to phishing attacks.',
      isOpen: false
    },
    {
      question: 'How can I access FraudShield\'s services?',
      answer: 'FraudShield provides services are accessible through its web platform and dedicated browser extension. Users can utilize content analysis tool and phishing link detection features to enhance their online security and protect against financial fraud.',
      isOpen: false
    },
    {
      question: 'Is my personal and financial information safe with FraudShield?',
      answer: 'Yes, FraudShield takes security seriously and employs industry-standard measures to protect users personal and financial information. All data is encrypted to ensure secure transactions and safeguard against unauthorized access.',
      isOpen: false
    },
    {
      question: 'How can I get help if I encounter issues or have questions?',
      answer: 'If you encounter any issues or have questions about our services, please contact our support team at support@fraudshield.com. We are dedicated to providing assistance and will respond to your inquiries promptly.',
      isOpen: false
    }
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className='faq-container'>
      <div className='heading'><h2>Frequently Asked Questions</h2></div>
      {faqItems.map((item, index) => (
        <div className='faq-item' key={index}>
          <div className={`faq-question ${item.isOpen ? 'open' : ''}`} onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
          </div>
          {item.isOpen && <p className='faq-answer'>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
