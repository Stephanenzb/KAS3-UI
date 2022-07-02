import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { logout } from './services/AuthApi';
import Auth from './contextes/Auth';
import './Navbar.css';
import { LoginButton } from './LoginButton';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  }

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
          {isAuthenticated &&
          <Link to='/profil' className='navbar-logo' onClick={closeMobileMenu}>
          KAS
          <i class='fa fa-music' />
          </Link>
          }
          {!isAuthenticated &&
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          KAS
          <i class='fa fa-music' />
        </Link> }
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              {isAuthenticated && 
              <Link to="/TranscriptedAudio" className='nav-links' onClick={closeMobileMenu}>
              Bibliothèque
            </Link>
              }
              {!isAuthenticated &&
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
              }
              
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contactez-Nous
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                 KAS : l'équipe !
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' path="/contact"> KAS : l'équipe ! <i className='far fa-play-circle' /></Button>}
          {isAuthenticated && <LoginButton buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleLogout}>Deconnexion</LoginButton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
