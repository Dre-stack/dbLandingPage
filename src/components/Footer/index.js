import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
          >
            <circle className="fb1" cx="25" cy="25" r="25"></circle>{' '}
            <path
              className="fb2"
              d="M27.2,39V26.2h4.3l0.6-5h-4.9V18c0-1.4,0.4-2.4,2.5-2.4l2.6,0v-4.5c-0.5-0.1-2-0.2-3.9-0.2
		c-3.8,0-6.4,2.3-6.4,6.6v3.7h-4.3v5H22V39H27.2z"
            ></path>{' '}
          </svg>
          <div className="details">
            <h3>Facebook</h3>
            <p>@deepbluenetworks</p>
          </div>
        </div>
        <div className="item">
          <svg
            className="footer-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
          >
            {' '}
            <circle
              className="vimeo1"
              cx="25"
              cy="25"
              r="25"
            ></circle>{' '}
            <g
              id="layer1"
              transform="translate(-539.17946,-568.85777)"
            >
              {' '}
              <path
                className="fb2"
                d="M559.6,604c9.4,0,14.6-7.8,14.6-14.6c0-0.2,0-0.4,0-0.7c1-0.7,1.9-1.6,2.6-2.6
					c-0.9,0.4-1.9,0.7-2.9,0.8c1.1-0.6,1.9-1.6,2.2-2.8c-1,0.6-2.1,1-3.2,1.2c-0.9-1-2.3-1.6-3.7-1.6c-2.8,0-5.1,2.3-5.1,5.1
					c0,0.4,0,0.8,0.1,1.2c-4.3-0.2-8-2.2-10.5-5.3c-0.4,0.8-0.7,1.6-0.7,2.6c0,1.8,0.9,3.3,2.3,4.3c-0.8,0-1.6-0.3-2.3-0.6
					c0,0,0,0,0,0.1c0,2.5,1.8,4.5,4.1,5c-0.4,0.1-0.9,0.2-1.3,0.2c-0.3,0-0.6,0-1-0.1c0.7,2,2.5,3.5,4.8,3.6c-1.8,1.4-4,2.2-6.4,2.2
					c-0.4,0-0.8,0-1.2-0.1C554,603.1,556.7,604,559.6,604"
              ></path>{' '}
            </g>{' '}
          </svg>
          <div className="details">
            <h3>Twitter</h3>
            <p>@db_networks</p>
          </div>
        </div>
        <div className="item">
          <svg
            className="footer-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
          >
            {' '}
            <path
              className="insta1"
              d="M25.1,50h-0.1C11.2,50,0,38.8,0,25v0C0,11.2,11.2,0,24.9,0h0.1C38.8,0,50,11.2,50,25v0C50,38.8,38.8,50,25.1,50
							z"
            ></path>{' '}
            <g>
              {' '}
              <path
                className="fb2"
                d="M25,14.1c3.5,0,4,0,5.4,0.1c1.3,0.1,2,0.3,2.5,0.5c0.6,0.2,1.1,0.6,1.5,1c0.4,0.4,0.8,1,1,1.5
								c0.2,0.5,0.4,1.2,0.5,2.5c0.1,1.4,0.1,1.8,0.1,5.4s0,4-0.1,5.4c-0.1,1.3-0.3,2-0.5,2.5c-0.4,1.2-1.4,2.1-2.5,2.5
								c-0.5,0.2-1.2,0.4-2.5,0.5c-1.4,0.1-1.8,0.1-5.4,0.1s-4,0-5.4-0.1c-1.3-0.1-2-0.3-2.5-0.5c-0.6-0.2-1.1-0.6-1.5-1
								c-0.4-0.4-0.8-1-1-1.5c-0.2-0.5-0.4-1.2-0.5-2.5c-0.1-1.4-0.1-1.8-0.1-5.4s0-4,0.1-5.4c0.1-1.3,0.3-2,0.5-2.5
								c0.2-0.6,0.6-1.1,1-1.5c0.4-0.4,1-0.8,1.5-1c0.5-0.2,1.2-0.4,2.5-0.5C21,14.1,21.5,14.1,25,14.1 M25,11.7c-3.6,0-4.1,0-5.5,0.1
								c-1.4,0.1-2.4,0.3-3.2,0.6c-0.9,0.3-1.7,0.9-2.4,1.5c-0.7,0.7-1.2,1.5-1.5,2.4c-0.3,0.8-0.6,1.8-0.6,3.2c-0.1,1.4-0.1,1.9-0.1,5.5
								s0,4.1,0.1,5.5c0.1,1.4,0.3,2.4,0.6,3.2c0.3,0.9,0.9,1.7,1.5,2.4c0.7,0.7,1.5,1.2,2.4,1.5c0.8,0.3,1.8,0.6,3.2,0.6
								c1.4,0.1,1.9,0.1,5.5,0.1s4.1,0,5.5-0.1c1.4-0.1,2.4-0.3,3.2-0.6c1.8-0.7,3.2-2.1,3.9-3.9c0.3-0.8,0.6-1.8,0.6-3.2
								c0.1-1.4,0.1-1.9,0.1-5.5s0-4.1-0.1-5.5c-0.1-1.4-0.3-2.4-0.6-3.2c-0.3-0.9-0.9-1.7-1.5-2.4c-0.7-0.7-1.5-1.2-2.4-1.5
								c-0.8-0.3-1.8-0.6-3.2-0.6C29.1,11.7,28.6,11.7,25,11.7L25,11.7L25,11.7z"
              ></path>{' '}
              <path
                className="fb2"
                d="M25,18.2c-3.8,0-6.8,3.1-6.8,6.8s3.1,6.8,6.8,6.8s6.8-3.1,6.8-6.8l0,0C31.8,21.2,28.8,18.2,25,18.2z M25,29.4
								c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4C29.4,27.4,27.4,29.4,25,29.4z"
              ></path>{' '}
              <circle
                className="fb2"
                cx="32.1"
                cy="17.9"
                r="1.6"
              ></circle>{' '}
            </g>{' '}
          </svg>
          <div className="details">
            <h3>Instagram</h3>
            <p>@kreativeshaus</p>
          </div>
        </div>
        <div className="item">
          <svg
            className="footer-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
          >
            <circle
              className="behance1"
              cx="25"
              cy="25"
              r="25"
            ></circle>{' '}
            <g>
              {' '}
              <rect
                x="29"
                y="17.4"
                className="fb2"
                width="6.9"
                height="2.1"
              ></rect>{' '}
              <path
                className="fb2"
                d="M22.4,24.1c0,0,2.6-0.2,2.6-3.2c0-3-2.1-4.5-4.7-4.5h-4.9h-0.1h-3.7v16.8h3.7h0.1h4.9c0,0,5.3,0.2,5.3-5
											C25.5,28.3,25.8,24.1,22.4,24.1z M15.3,19.4h4.3h0.6c0,0,1.2,0,1.2,1.7c0,1.7-0.7,2-1.5,2h-4.6V19.4z M20,30.2c-0.1,0-0.2,0-0.3,0
											h-4.3v-4.5h4.9c0,0,1.8,0,1.8,2.3C22,30,20.7,30.2,20,30.2z"
              ></path>{' '}
              <path
                className="fb2"
                d="M32.6,20.7c-6.5,0-6.4,6.4-6.4,6.4s-0.4,6.4,6.4,6.4c0,0,5.7,0.3,5.7-4.5h-3c0,0,0.1,1.8-2.7,1.8
											     c0,0-3,0.2-3-2.9h8.7C38.5,28,39.4,20.7,32.6,20.7z M29.8,25.7c0,0,0.4-2.6,3-2.6c2.6,0,2.6,2.6,2.6,2.6H29.8z"
              ></path>{' '}
            </g>{' '}
          </svg>
          <div className="details">
            <h3>Behance</h3>
            <p>@deepbluenetworks</p>
          </div>
        </div>
        <div className="item">
          <svg
            className="footer-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
          >
            <circle
              className="vimeo1"
              cx="25"
              cy="25"
              r="25"
            ></circle>{' '}
            <svg
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              {' '}
              <path
                className="fb2"
                d="M420.1 197.9c-1.5 33.6-25 79.5-70.3 137.8 -46.9 60.9-86.5 91.4-118.9 91.4 -20.1 0-37.1-18.5-51-55.6 -9.3-34-18.5-68-27.8-102 -10.3-37.1-21.4-55.7-33.2-55.7 -2.6 0-11.6 5.4-27 16.2L75.7 209.1c17-14.9 33.8-29.9 50.3-44.9 22.7-19.6 39.7-29.9 51.1-31 26.8-2.6 43.3 15.8 49.5 55 6.7 42.4 11.3 68.7 13.9 79 7.7 35.1 16.2 52.7 25.5 52.7 7.2 0 18-11.4 32.5-34.2 14.4-22.8 22.2-40.1 23.2-52.1 2.1-19.7-5.7-29.5-23.2-29.5 -8.3 0-16.8 1.9-25.5 5.7 16.9-55.5 49.3-82.4 97.1-80.9C405.5 130 422.2 153 420.1 197.9z"
              ></path>{' '}
            </svg>{' '}
          </svg>
          <div className="details">
            <h3>Vimeo</h3>
            <p>@deepbluenetworks</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2020 deepblue networks AG,Schützenstraße 21, 22761
        Hamburg
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="##">Kontakt</Link>
          </li>
          <li>
            <Link to="##">Presse</Link>
          </li>
          <li>
            <Link to="##">Kunde werden</Link>
          </li>
          <li>
            <Link to="##">Talentsblog</Link>
          </li>
          <li>
            <Link to="##">Impressum</Link>
          </li>
          <li>
            <Link to="##">AGB</Link>
          </li>
          <li>
            <Link to="##">Datenschutzerklärung</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
