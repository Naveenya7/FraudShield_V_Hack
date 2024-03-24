import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Usernavbar.css';

function Usernavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo-container'>
            <div className="navbar-logo">
        <img src="Images/logo.png" alt="Logo" className="logo-image" />
      </div>
            <span className='navbar-logo'>FraudShield</span>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='textinput' className='nav-links' onClick={closeMobileMenu}>
                Text And Image Inputs
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/imageinput'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Image input
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='youtubeanalysis'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                YouTube URLs, Audio And Video Inputs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='website'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Website URLs
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                LogOut
              </Link>
            </li>
          </ul>
          {button && (
            <Link to='/' className='btn-mobile' onClick={closeMobileMenu}>
              <Button buttonStyle='btn--outline contrast-button'>LogOut</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
export default Usernavbar;