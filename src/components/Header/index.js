import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ transparentHeader }) {
  const [headerClassName, setHeaderClassName] = useState('');
  const [hamburgerClass, setHamburgerClass] = useState(
    'hamburger-menu'
  );
  const [navClassName, setNavClassName] = useState(
    'header-nav-links'
  );

  useEffect(() => {
    if (transparentHeader) {
      setHeaderClassName('header transparent');
    } else {
      setHeaderClassName('header');
    }
  }, [transparentHeader]);

  const handleMobileNav = () => {
    if (hamburgerClass === 'hamburger-menu') {
      setHamburgerClass('hamburger-menu open');
    } else {
      setHamburgerClass('hamburger-menu');
    }
    if (navClassName === 'header-nav-links') {
      setNavClassName('header-nav-links active');
    } else {
      setNavClassName('header-nav-links');
    }
  };

  return (
    <div className={headerClassName}>
      <div className="header-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="174.4px"
          height="34px"
          viewBox="0 0 174.4 34"
        >
          <g>
            <polygon points="80.6,7.7 76.8,7.7 76.8,15.2 88.1,15.2 88.1,18.9 76.8,18.9 76.8,22.6 91.8,22.6 91.8,11.4 80.6,11.4 	"></polygon>
            <polygon points="58.1,15.2 69.4,15.2 69.4,18.9 58.1,18.9 58.1,26.4 61.9,26.4 61.9,22.6 73.1,22.6 73.1,11.4 58.1,11.4 	"></polygon>
            <polygon points="13.2,11.4 2,11.4 2,22.6 16.9,22.6 16.9,18.9 5.8,18.9 5.8,15.2 16.9,15.2 16.9,7.7 13.2,7.7 	"></polygon>
            <polygon points="20.7,22.6 35.7,22.6 35.7,18.9 24.5,18.9 24.5,15.2 35.7,15.2 35.7,11.4 20.7,11.4 	"></polygon>
            <polygon points="39.4,22.6 54.4,22.6 54.4,18.9 43.2,18.9 43.2,15.2 54.4,15.2 54.4,11.4 39.4,11.4 	"></polygon>
            <rect x="95.6" y="7.7" width="3.7" height="14.9"></rect>
            <polygon points="114.3,18.9 106.8,18.9 106.8,11.4 103.1,11.4 103.1,22.6 118,22.6 118,11.4 114.3,11.4 	"></polygon>
            <polygon points="121.8,22.6 136.7,22.6 136.7,18.9 125.5,18.9 125.5,15.2 136.7,15.2 136.7,11.4 121.8,11.4 	"></polygon>
            <polygon
              points="159.2,16.4 155.5,11.4 151.7,11.4 151.7,22.6 155.5,22.6 155.5,17.7 159.2,22.6 159.3,22.6 163,22.6 163,11.4 
		159.2,11.4 	"
            ></polygon>
            <path
              d="M157.4,2c-8.3,0-15,6.8-15,15s6.7,14.9,15,15c8.3,0,15-6.8,15-15C172.4,8.7,165.7,2,157.4,2z M157.4,28.2
		c-6.2-0.1-11.2-5-11.2-11.2s5-11.2,11.2-11.2s11.2,5,11.2,11.2S163.6,28.2,157.4,28.2z"
            ></path>
          </g>
        </svg>
      </div>
      <div className={hamburgerClass} onClick={handleMobileNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={navClassName}>
        <ul>
          <li>
            <Link to="##">Agenturleistungen</Link>
          </li>
          <li>
            <Link to="##">Referenzen</Link>
          </li>
          <li>
            <Link to="##"> Hooked</Link>
          </li>
          <li>
            <Link to="##"> Jobs</Link>
          </li>
          <li>
            <Link to="##">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
