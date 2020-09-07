import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  const [videoSrc, setVidoeSource] = useState('');

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 900) {
      setVidoeSource(
        'https://www.db-n.com/wp-content/uploads/2018/11/desktop-1.mp4'
      );
    } else if (width >= 600 && width < 900) {
      setVidoeSource(
        'https://www.db-n.com/wp-content/uploads/2018/11/mobile-1.mp4'
      );
    } else if (width < 600) {
      setVidoeSource(
        'https://www.db-n.com/wp-content/uploads/2018/11/mobile-1.mp4'
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-video">
          <video
            autoPlay
            playsInline
            loop
            muted
            src={videoSrc}
          ></video>
        </div>
        <div className="home-introduction">
          <div className="home-introduction__text">
            <div className="heading">
              <span>Willkommen</span> <br /> im Kreativen Haus.
            </div>
            <div className="content">
              <p>
                Wir verbinden Strategie, Kreativität und Technologie
                unter einem Dach und sind Ihr Partner für erfolgreiche
                digitale Produkte, Marken und Kampagnen aus einer
                Hand. So helfen wir Marken und Unternehmen fit für den
                Konsumenten von heute zu werden, der mehr erwartet,
                als nur ein gutes Produkt.
              </p>
              <p>
                deepblue begleitet seit Jahren Unternehmen auf dem Weg
                Richtung Customer Centricity und liefert Stabilität,
                Steuerung und ganzheitliche Lösungen für jede Phase
                der Customer Journey. Unser Weg: von der
                Marken-Botschaft zum Marken-Erlebnis.
              </p>
              <p>
                Wir glauben an Technologie, die beeindruckt. Und
                lieben Ideen, die begeistern. Mit der Marke im Fokus
                verbinden wir Kreativität und Innovation und entfachen
                so unwiderstehliche Kraft über alle Kanäle.
              </p>
              <p>
                Wir arbeiten dabei iterativ und agil in skalierbaren
                Teams mit unseren Kunden an vielen Orten.
              </p>
              <p>Wir sind mehr als eine Agentur.</p>
              <button className="btn primary">
                <Link to="##">Mehr erfahren</Link>
              </button>
            </div>
          </div>
          <div className="home-introduction__image">
            <img
              src="https://www.db-n.com/wp-content/uploads/2017/01/dbn-das-kreative-haus-first-letter.gif"
              alt="dbn-das-kreative-haus-first-letter"
            />
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stats__image">
            <img
              src="https://www.db-n.com/wp-content/uploads/2017/01/deepblue-networks-house-illustration.png"
              alt="deepblue-networks-house-illustration"
            />
          </div>
          <div className="home-stats__texts">
            <div className="heading">Mehr als eine Agentur</div>
            <div className="content">
              Gegründet im Jahr 2001, beschäftigen wir heute über 150
              Mitarbeiter, die ganzheitlich an digitalen Produkten,
              Marken und Kampagnen arbeiten. Zu unseren Kunden zählen
              u.a. die Unternehmen Bitburger, Bosch, Osram,
              Gerolsteiner, Migros, otelo, Swatch und Unilever.
            </div>
            <div className="highlights">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 70 70"
                >
                  <path
                    className="iconcolor"
                    d="M52.9,39.5l7.8-9.1c0.4-0.4,0.5-1.1,0.2-1.6c-0.2-0.5-0.8-0.9-1.4-0.9H44.4v-8.6c0-0.8-0.7-1.5-1.5-1.5H22v-1.7
    	c0-0.8-0.7-1.5-1.5-1.5S19,15.3,19,16.2v3.2v20.1v24.3c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V41h8.4v8.6c0,0.2,0,0.3,0.1,0.5
    	c0,0,0,0,0,0.1c0.1,0.2,0.2,0.3,0.3,0.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1
    	c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0.1h27.7c0.6,0,1.1-0.3,1.4-0.9c0.2-0.5,0.2-1.2-0.2-1.6L52.9,39.5z M22,20.8h19.5V38H22V20.8
    	z M39.1,41l-5.7,5.2V41H39.1z M35.8,48.1l8.2-7.5c0,0,0,0,0,0c0.1-0.1,0.2-0.3,0.3-0.4c0,0,0,0,0,0c0.1-0.2,0.1-0.3,0.1-0.5
    	c0,0,0,0,0-0.1c0,0,0,0,0,0v-8.6h11.8l-6.5,7.6c-0.5,0.6-0.5,1.4,0,2l6.5,7.6H35.8z"
                  ></path>
                </svg>
                <p>
                  <strong>2001</strong> in Hamburg <br /> gegründet
                </p>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 70 70"
                >
                  <path
                    className="iconcolor"
                    d="M58.2,38.7c2.1-1.7,3.5-4.2,3.5-7.1c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1c0,2.9,1.4,5.5,3.5,7.2c-1.7,0.7-3.3,1.7-4.6,3
    	c-1.9-2.2-4.3-3.9-7.1-5c2.5-1.9,4.2-4.8,4.2-8.2c0-5.6-4.6-10.2-10.2-10.2S19,22.9,19,28.5c0,3.4,1.7,6.4,4.2,8.3
    	c-6.4,2.4-10.9,8.6-10.9,15.8v7.5c0,0.8,0.7,1.5,1.5,1.5h31h21.4c0.8,0,1.5-0.7,1.5-1.5v-7.5C67.7,46.3,63.7,40.9,58.2,38.7z
    	 M46.4,31.6c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1c0,3.2-2.4,5.8-5.5,6.1c-0.2,0-0.4,0-0.5,0c-0.2,0-0.4,0-0.6,0
    	C48.9,37.4,46.4,34.7,46.4,31.6z M52.5,40.7c0.2,0,0.4,0,0.7,0c1.1,0.1,2.2,0.3,3.2,0.6c-0.2,1.9-1.9,3.4-3.9,3.4
    	c-2,0-3.6-1.5-3.9-3.4c1.1-0.4,2.2-0.6,3.3-0.6C52.2,40.6,52.3,40.7,52.5,40.7z M22,28.5c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2
    	c0,3.7-2.8,6.8-6.5,7.2c-0.2,0-0.4,0-0.6,0c-0.3,0-0.5,0-0.8,0C24.9,35.4,22,32.3,22,28.5z M29.2,38.7c0.3,0,0.5,0,0.8,0
    	c1.6,0.1,3.1,0.4,4.5,1c-0.4,2.6-2.6,4.6-5.3,4.6c-2.6,0-4.8-1.9-5.3-4.5c1.4-0.6,3-0.9,4.6-1C28.8,38.7,29,38.7,29.2,38.7z
    	 M15.3,52.7c0-4.7,2.3-8.8,5.9-11.4c1,3.4,4.2,5.9,8,5.9c3.8,0,7-2.6,8-6.1c3.7,2.5,6.1,6.7,6.1,11.5v6h-28V52.7z M64.7,58.6H46.3
    	v-6c0-3.1-0.8-6-2.3-8.4c0.6-0.6,1.2-1.1,1.8-1.5c0.8,2.9,3.5,5,6.6,5c3.2,0,5.9-2.2,6.7-5.1c3.3,2.2,5.5,5.9,5.5,10.1V58.6z"
                  ></path>
                </svg>
                <p>
                  <strong>140</strong> Mitarbeiter aus <br />
                  <strong>12</strong> Nationen <br />
                </p>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 70 70"
                >
                  <path
                    className="iconcolor"
                    d="M69.3,33.5c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1-0.1-0.2c0,0,0-0.1,0-0.1
    	c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2C69.1,32.1,69,32,68.9,32c0,0-0.1-0.1-0.1-0.1l-16.4-13c-0.3-0.2-0.6-0.3-0.9-0.3h-23
    	c-0.3,0-0.7,0.1-0.9,0.3l-16.4,13c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1
    	c0,0,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1
    	c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1L38.9,65c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1
    	c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1
    	c0.1,0,0.3,0,0.4-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1
    	c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0L69,34.1c0,0,0,0,0-0.1c0-0.1,0.1-0.1,0.1-0.2C69.2,33.8,69.3,33.7,69.3,33.5
    	C69.3,33.6,69.3,33.6,69.3,33.5z M63.6,31.6H52.1l-8.8-10H51L63.6,31.6z M31.9,31.6l8.1-9.3l8.1,9.3H31.9z M49.3,34.6L40,59.7
    	l-9.3-25.1H49.3z M29,21.5h7.6l-8.8,10H16.4L29,21.5z M27.5,34.6l8.4,22.6L15.5,34.6H27.5z M44.1,57.2l8.4-22.6h12.1L44.1,57.2z"
                  ></path>
                </svg>
                <p>
                  <strong>14</strong> Millionen <br /> Honorarumsatz
                </p>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 70 70"
                >
                  <g className="iconcolor">
                    <path
                      d="M60.1,19.9C57,16.7,49.4,17.8,40,24.6c-9.4-6.8-17-7.9-20.1-4.7C16.7,23,17.8,30.6,24.6,40c-6.8,9.4-7.8,17-4.7,20.1
    		c1.1,1.1,2.8,1.7,4.9,1.7c3.9,0,9.2-2,15.3-6.4c6.1,4.4,11.4,6.4,15.3,6.4c2.1,0,3.8-0.6,4.9-1.7c3.1-3.1,2.1-10.7-4.7-20.1
    		C62.2,30.6,63.3,23,60.1,19.9z M55.3,21.1c1.2,0,2.1,0.3,2.7,0.9c2.1,2.1,0.5,8.2-4.5,15.5c-1.5-1.9-3.2-3.8-5.2-5.7
    		c-2-2-3.9-3.7-5.8-5.2C47.7,22.9,52.3,21.1,55.3,21.1z M51.6,40c-1.6,2-3.4,4.1-5.5,6.2S42,50,40,51.6c-2-1.6-4.1-3.4-6.2-5.5
    		C31.8,44.1,30,42,28.4,40c1.6-2,3.4-4.1,5.5-6.2c2.1-2.1,4.1-3.9,6.2-5.5c2,1.6,4.1,3.4,6.2,5.5C48.2,35.9,50,38,51.6,40z M22,22
    		c0.6-0.6,1.5-0.9,2.7-0.9c3,0,7.6,1.8,12.7,5.4c-1.9,1.5-3.8,3.2-5.8,5.2c-2,2-3.7,3.9-5.2,5.7C21.5,30.2,19.9,24.1,22,22z M22,58
    		c-2.1-2.1-0.5-8.2,4.5-15.5c1.5,1.9,3.2,3.8,5.2,5.7c2,2,3.9,3.7,5.8,5.2C30.2,58.5,24.1,60.1,22,58z M58,58
    		c-2.1,2.1-8.2,0.5-15.5-4.5c1.9-1.5,3.8-3.2,5.8-5.2c2-2,3.7-3.9,5.2-5.7C58.5,49.8,60.1,55.9,58,58z"
                    ></path>
                    <circle cx="40" cy="40" r="3.1"></circle>
                  </g>
                </svg>
                <p>
                  <strong>WP</strong> & <strong>Commarco</strong>{' '}
                  <br /> Netzwerk
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="home-reasons">
          <div className="heading">
            Gründe für deepblue als Partner
          </div>
          <div className="content">
            <div className="item">
              <svg
                width="51px"
                height="45px"
                viewBox="0 0 51 45"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-521.000000, -1520.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_agil"
                      transform="translate(522.000000, 1521.000000)"
                    >
                      <g>
                        <path
                          d="M17.9706,9.2349 C17.9706,14.0589 14.0596,17.9699 9.2356,17.9699 C4.4106,17.9699 0.4996,14.0589 0.4996,9.2349 C0.4996,4.4109 4.4106,0.5009 9.2356,0.5009 C14.0596,0.5009 17.9706,4.4109 17.9706,9.2349 Z"
                          id="Stroke-1"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M26.5478,35.6841 C26.5478,39.3841 23.5478,42.3831 19.8488,42.3831 C16.1488,42.3831 13.1498,39.3841 13.1498,35.6841 C13.1498,31.9841 16.1488,28.9851 19.8488,28.9851 C23.5478,28.9851 26.5478,31.9841 26.5478,35.6841 Z"
                          id="Stroke-3"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M47.831,18.6694 C47.831,21.5634 45.485,23.9084 42.591,23.9084 C39.697,23.9084 37.352,21.5634 37.352,18.6694 C37.352,15.7744 39.697,13.4294 42.591,13.4294 C45.485,13.4294 47.831,15.7744 47.831,18.6694 Z"
                          id="Stroke-5"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M12.5312,17.4478 L17.3372,29.4248"
                          id="Stroke-7"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M25.2206,31.6645 L38.2456,21.9205"
                          id="Stroke-9"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M17.7226,11.6353 L37.3966,17.1993"
                          id="Stroke-11"
                          strokeWidth="3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Agil</strong> <br />
                Wir arbeiten in interdisziplinären Teams mit agilen
                Methoden.
              </p>
            </div>
            <div className="item">
              <svg
                width="48px"
                height="40px"
                viewBox="0 0 48 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-938.000000, -1522.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_strategisch"
                      transform="translate(939.000000, 1523.000000)"
                    >
                      <g>
                        <polygon
                          id="Stroke-1"
                          strokeWidth="3"
                          points="9.458 27.9521 18.427 27.9521 18.427 17.2661 9.458 17.2661"
                        ></polygon>
                        <polygon
                          id="Stroke-2"
                          strokeWidth="3"
                          points="18.427 27.9521 27.396 27.9521 27.396 11.7571 18.427 11.7571"
                        ></polygon>
                        <g
                          id="Group-6"
                          transform="translate(0.000000, 0.452100)"
                          strokeWidth="3"
                        >
                          <polygon
                            id="Stroke-3"
                            points="27.396 27.5 36.365 27.5 36.365 0.048 27.396 0.048"
                          ></polygon>
                          <polyline
                            id="Stroke-5"
                            points="45.0836 36.4998 0.4996 36.4998 0.4996 0.0478"
                          ></polyline>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <p>
                <strong>Strategisch</strong> <br />
                Wir sind fokussiert, aber wandlungsbereit.
              </p>
            </div>
            <div className="item">
              <svg
                width="48px"
                height="46px"
                viewBox="0 0 48 46"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-1346.000000, -1519.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_erfolgsorientiert"
                      transform="translate(1347.000000, 1520.000000)"
                    >
                      <g>
                        <path
                          d="M34.758,43.3836 L10.41,43.3836 C10.41,43.3836 15.861,36.2926 22.584,36.2926 C29.308,36.2926 34.758,43.3836 34.758,43.3836 Z"
                          id="Stroke-1"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M36.6623,0.4998 C36.6623,9.3448 30.3593,36.1468 22.5843,36.1468 C14.8083,36.1468 8.5063,9.3448 8.5063,0.4998 L36.6623,0.4998 Z"
                          id="Stroke-3"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M35.8938,10.0428 L44.6448,10.0428 C44.6448,20.4538 30.4248,27.7108 30.4248,27.7108"
                          id="Stroke-5"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M9.2512,10.0428 L0.5002,10.0428 C0.5002,20.4538 14.7202,27.7108 14.7202,27.7108"
                          id="Stroke-7"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M8.9767,5.9842 L34.7577,5.9842"
                          id="Stroke-9"
                          strokeWidth="3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Erfolgsorientiert</strong> <br />
                Wir liefern Ergebnisse
              </p>
            </div>
            <div className="item">
              <svg
                width="50px"
                height="44px"
                viewBox="0 0 50 44"
                version="1.1"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-521.000000, -1664.000000)"
                  >
                    <g
                      id="icon_verbindlich"
                      transform="translate(522.000000, 1664.000000)"
                    >
                      <g>
                        <g
                          id="Group-5"
                          transform="translate(0.000000, 0.623100)"
                          stroke="#1D1D1B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        >
                          <polygon
                            id="Stroke-1"
                            points="0.5 34.254 46.667 34.254 46.667 0.876 0.5 0.876"
                          ></polygon>
                          <polygon
                            id="Stroke-3"
                            points="17.492 41.5 29.675 41.5 29.675 34.255 17.492 34.255"
                          ></polygon>
                          <path
                            d="M12.6827,41.4995 L34.4837,41.4995"
                            id="Stroke-4"
                          ></path>
                        </g>
                        <path
                          d="M11.2686,24.6744 L32.1846,18.0244"
                          id="Stroke-6"
                          stroke="#1D1D1B"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <g
                          id="Group-15"
                          transform="translate(5.000000, 13.623100)"
                        >
                          <path
                            d="M32.9835,3.7183 C32.9835,5.6513 31.4175,7.2183 29.4835,7.2183 C27.5505,7.2183 25.9835,5.6513 25.9835,3.7183 C25.9835,1.7843 27.5505,0.2183 29.4835,0.2183 C31.4175,0.2183 32.9835,1.7843 32.9835,3.7183"
                            id="Fill-7"
                            fill="#FEFEFE"
                          ></path>
                          <path
                            d="M32.9835,3.7183 C32.9835,5.6513 31.4175,7.2183 29.4835,7.2183 C27.5505,7.2183 25.9835,5.6513 25.9835,3.7183 C25.9835,1.7843 27.5505,0.2183 29.4835,0.2183 C31.4175,0.2183 32.9835,1.7843 32.9835,3.7183 Z"
                            id="Stroke-9"
                            stroke="#1D1D1B"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.6827,11.0513 C7.6827,12.9843 6.1167,14.5513 4.1827,14.5513 C2.2497,14.5513 0.6827,12.9843 0.6827,11.0513 C0.6827,9.1183 2.2497,7.5513 4.1827,7.5513 C6.1167,7.5513 7.6827,9.1183 7.6827,11.0513"
                            id="Fill-11"
                            fill="#FEFEFE"
                          ></path>
                          <path
                            d="M7.6827,11.0513 C7.6827,12.9843 6.1167,14.5513 4.1827,14.5513 C2.2497,14.5513 0.6827,12.9843 0.6827,11.0513 C0.6827,9.1183 2.2497,7.5513 4.1827,7.5513 C6.1167,7.5513 7.6827,9.1183 7.6827,11.0513 Z"
                            id="Stroke-13"
                            stroke="#1D1D1B"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Verbindlich</strong> <br />
                Wir denken langfristig
              </p>
            </div>
            <div className="item">
              <svg
                width="37px"
                height="49px"
                viewBox="0 0 37 49"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-944.000000, -1662.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_vernetzt"
                      transform="translate(945.000000, 1662.666667)"
                    >
                      <g transform="translate(0.000000, 0.333333)">
                        <polygon
                          id="Stroke-1"
                          strokeWidth="3"
                          points="0.501 18.6401 11.908 18.6401 11.908 0.5001 0.501 0.5001"
                        ></polygon>
                        <polygon
                          id="Stroke-3"
                          strokeWidth="3"
                          points="0.501 45.8901 11.908 45.8901 11.908 27.7501 0.501 27.7501"
                        ></polygon>
                        <polygon
                          id="Stroke-4"
                          strokeWidth="3"
                          points="22.501 26.8901 33.908 26.8901 33.908 8.7501 22.501 8.7501"
                        ></polygon>
                        <path
                          d="M12.8989,41.2305 L23.9689,41.2305 C26.4759,41.2305 28.5079,39.1985 28.5079,36.6915 L28.5079,27.3195"
                          id="Stroke-5"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M5.9907,20.0586 L5.9907,26.8196"
                          id="Stroke-6"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M12.9878,12.1631 L21.2418,12.1631"
                          id="Stroke-7"
                          strokeWidth="3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Vernetzt</strong> <br />
                Wir schaffen Beziehungen zwischen Touchpoints,
                Mitarbeitern und Kunden
              </p>
            </div>
            <div className="item">
              <svg
                width="32px"
                height="48px"
                viewBox="0 0 32 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-1354.000000, -1662.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_verantwortung"
                      transform="translate(1355.000000, 1663.000000)"
                    >
                      <g>
                        <path
                          d="M19.9063,19.516 C26.9333,22.534 29.2653,31.974 29.2653,39.919 C29.2653,47.084 0.5003,47.084 0.5003,39.919 C0.5003,32.021 2.8043,22.644 9.7373,19.569"
                          id="Stroke-1"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M25.0304,10.6478 C25.0304,16.2518 20.4874,20.7948 14.8834,20.7948 C9.2784,20.7948 4.7354,16.2518 4.7354,10.6478 C4.7354,5.0438 9.2784,0.5008 14.8834,0.5008 C20.4874,0.5008 25.0304,5.0438 25.0304,10.6478 Z"
                          id="Stroke-3"
                          strokeWidth="3"
                        ></path>
                        <polyline
                          id="Stroke-5"
                          strokeWidth="3"
                          points="22.5977 21.4798 14.8827 29.1948 7.0917 21.4038"
                        ></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Verantwortlich</strong> <br />
                Wir setzen uns gerne in den Driver Seat.
              </p>
            </div>
            <div className="item">
              <svg
                width="37px"
                height="38px"
                viewBox="0 0 37 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-528.000000, -1805.000000)"
                    fill="#000000"
                  >
                    <g
                      id="icon_unternehmerisch"
                      transform="translate(528.000000, 1805.333333)"
                    >
                      <g id="Shape">
                        <path
                          d="M18.5427279,10.697479 C20.0565283,10.697479 21.5703287,11.4369748 22.3272289,12.9159664 C22.894904,13.8403361 24.0302543,14.0252101 24.9763795,13.6554622 C25.9225048,13.1008403 26.1117298,11.9915966 25.7332797,11.0672269 C24.2194794,8.4789916 21.5703287,7 18.5427279,7 C14.758227,7 11.3521761,9.58823529 10.5952759,13.1008403 L8.89225048,13.1008403 C7.75690019,13.1008403 7,13.8403361 7,14.9495798 C7,16.0588235 7.75690019,16.7983193 8.89225048,16.7983193 L10.4060509,16.7983193 L10.4060509,19.2016807 L8.89225048,19.2016807 C7.75690019,19.2016807 7,19.9411765 7,21.0504202 C7,22.1596639 7.75690019,22.8991597 8.89225048,22.8991597 L10.5952759,22.8991597 C11.5414011,26.4117647 14.758227,29 18.5427279,29 C21.3811036,29 24.2194794,27.5210084 25.7332797,24.9327731 C26.3009549,24.0084034 25.9225048,22.8991597 24.9763795,22.3445378 C24.0302543,21.789916 22.894904,22.1596639 22.3272289,23.0840336 C21.5703287,24.3781513 20.0565283,25.302521 18.5427279,25.302521 C16.8397025,25.302521 15.3259021,24.3781513 14.5690019,22.8991597 L16.4612524,22.8991597 C17.5966027,22.8991597 18.3535029,22.1596639 18.3535029,21.0504202 C18.3535029,19.9411765 17.5966027,19.2016807 16.4612524,19.2016807 L14.1905518,19.2016807 L14.1905518,16.7983193 L16.4612524,16.7983193 C17.5966027,16.7983193 18.3535029,16.0588235 18.3535029,14.9495798 C18.3535029,13.8403361 17.5966027,13.1008403 16.4612524,13.1008403 L14.5690019,13.1008403 C15.3259021,11.6218487 16.8397025,10.697479 18.5427279,10.697479 Z"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M18.5,0 C8.325,0 0,8.325 0,18.5 C0,28.675 8.325,37 18.5,37 C28.675,37 37,28.675 37,18.5 C37,8.325 28.675,0 18.5,0 Z M18.5,33.3 C10.36,33.3 3.7,26.64 3.7,18.5 C3.7,10.36 10.36,3.7 18.5,3.7 C26.64,3.7 33.3,10.36 33.3,18.5 C33.3,26.64 26.64,33.3 18.5,33.3 Z"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Unternehmerisch</strong> <br />
                Wir lassen uns am Businesserfolg und Umsatz messen
              </p>
            </div>
            <div className="item">
              <svg
                width="48px"
                height="37px"
                viewBox="0 0 48 37"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-938.000000, -1804.000000)"
                  >
                    <g
                      id="icon_innovativ"
                      transform="translate(939.000000, 1804.000000)"
                    >
                      <g>
                        <polygon
                          id="Fill-1"
                          fill="#FEFEFE"
                          points="22.9638 35.2539 0.4998 12.7899 45.4278 12.7899"
                        ></polygon>
                        <polygon
                          id="Stroke-2"
                          stroke="#1D1D1B"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="22.9638 35.2539 0.4998 12.7899 45.4278 12.7899"
                        ></polygon>
                        <polygon
                          id="Fill-4"
                          fill="#FEFEFE"
                          points="33.8105 1.5 12.1175 1.5 0.4995 12.79 45.4275 12.79"
                        ></polygon>
                        <g
                          id="Group-11"
                          transform="translate(0.000000, 0.753600)"
                          stroke="#1D1D1B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        >
                          <polygon
                            id="Stroke-5"
                            points="33.8105 0.7464 12.1175 0.7464 0.4995 12.0364 45.4275 12.0364"
                          ></polygon>
                          <polyline
                            id="Stroke-7"
                            points="22.9638 0.7464 32.9688 12.0364 22.9638 34.5004"
                          ></polyline>
                          <polyline
                            id="Stroke-9"
                            points="22.9638 0.7464 12.9588 12.0364 22.9638 34.5004"
                          ></polyline>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Innovativ</strong> <br />
                Wir sind immer auf der Seite des Kunden und auf der
                Suche nach dem Neuen
              </p>
            </div>
            <div className="item">
              <svg
                width="39px"
                height="52px"
                viewBox="0 0 39 52"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Artboard-Copy-3"
                    transform="translate(-1351.000000, -1804.000000)"
                    stroke="#1D1D1B"
                  >
                    <g
                      id="icon_kreativ"
                      transform="translate(1352.000000, 1805.000000)"
                    >
                      <g>
                        <polygon
                          id="Stroke-1"
                          strokeWidth="3"
                          points="0.5 38.7618 23.928 38.7618 23.928 15.3338 0.5 15.3338"
                        ></polygon>
                        <path
                          d="M35.5936,37.6518 C35.5936,44.0948 30.3706,49.3188 23.9276,49.3188 C17.4846,49.3188 12.2606,44.0948 12.2606,37.6518 C12.2606,31.2088 17.4846,25.9858 23.9276,25.9858 C30.3706,25.9858 35.5936,31.2088 35.5936,37.6518 Z"
                          id="Stroke-3"
                          strokeWidth="3"
                        ></path>
                        <polygon
                          id="Stroke-4"
                          strokeWidth="3"
                          points="15.3622 15.3344 23.9272 0.5004 32.4922 15.3344"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                <strong>Kreativ</strong> <br />
                Wir machen einfache Botschaften zu unvergesslichen
                Erlebnissen
              </p>
            </div>
          </div>
        </div>
        <div className="home-hooked">
          <div className="home-hooked__content">
            <div className="heading">
              <span>Employer</span> <br />
              Branding
            </div>
            <div className="text">
              Hooked by deepblue verwandelt Recruiting Botschaften in
              unvergessliche Erlebnisse rund um Ihre Arbeitgebermarke.
            </div>
            <button className="btn primary">
              <Link to="##">Mehr erfahren</Link>
            </button>
          </div>
        </div>
        <div className="home-current">
          <div className="home-current__heading">Aktuell</div>
          <div className="home-current__content">
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2020/08/Logo_Tipico_web-1024x504.png"
                alt="Logo_Tipico"
              />
              <p>
                <strong>
                  Etat-Gewinn: Tipico setzt für neue TV-Kampagne auf
                  deepblue networks
                </strong>
              </p>
              <p>
                {' '}
                deepblue networks geht als Matchwinner aus dem
                aktuellen Tipico-Pitch hervor. Der führende Anbieter
                für Sportwetten… ...
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2020/07/image-4-1024x576.png"
                alt="Logo_Tipico"
              />
              <p>
                <strong>
                  Erfrischender Trinkgenuss mit König Rotbier
                </strong>
              </p>
              <p>
                Neue 3D-Computergrafik schafft eindrucksvolles
                Produkterlebnis deepblue networks und Eleven Post
                Production entwickeln den 2019 gelaunchten… ...
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2020/06/dmk-award-min-1024x768.jpg"
                alt="Logo_Tipico"
              />
              <p>
                <strong>
                  DMK Group und deepblue networks mit „Goldener
                  Victoria“ ausgezeichnet
                </strong>
              </p>
              <p>
                Deutschlands größte Molkereigenossenschaft betreibt
                einen massiven Umbauprozess („Vision 2030“), um sich
                dem Wandel der Konsumentenwünsche… ...
              </p>
            </div>
          </div>
          <button className="btn primary">
            <Link to="##">Alle Presseartikel</Link>
          </button>
        </div>
        <div className="home-cases">
          <div className="home-cases__heading">Cases</div>
          <div className="home-cases__content">
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/09/otelo_web.png"
                alt="otelo_web"
              />
              <h3>otelo App</h3>
              <p>Dann kündigen Sie doch einfach!</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/10/osram.png"
                alt="osram"
              />
              <h3>OSRAM Lightelligence IoT Platform</h3>
              <p>From Hardware to Smartware.</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/10/bosch.png"
                alt="bosch"
              />
              <h3>Bosch Transport Data Logger </h3>
              <p>Wissen was zwischen A und B passiert.</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/10/ernstings.png"
                alt="ernstings"
              />
              <h3>Ernsting’s family App</h3>
              <p>Stress lass nach!</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2017/06/migros.png"
                alt="migros"
              />
              <h3>Migros App</h3>
              <p>Noch nie war Einkaufen leichter</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/11/rvg.png"
                alt="rvg"
              />
              <h3>Bundesministerium für Verkehr</h3>
              <p>Runter vom Gas, kein Lappen für Lappen.</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/10/cebit_web.png"
                alt="cebit"
              />
              <h3>Die neue CEBIT</h3>
              <p>Radikal anders. Inspirierend und emotional.</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/10/otelo_app.png"
                alt="otelo website"
              />
              <h3>otelo Website</h3>
              <p>Schluss mit dem Chaos.</p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2016/10/einfach_lecker.png"
                alt="einfach lecker"
              />
              <h3>Unilever</h3>
              <p>Einfach Lecker, Rezeptideen für jeden Tag.</p>
            </div>
          </div>
          <button className="btn primary">
            <Link to="##">Alle cases</Link>
          </button>
        </div>
        <div className="home-contacts">
          <div className="home-contacts__heading">
            Ansprechpartner
          </div>
          <div className="home-contacts__content">
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2017/01/deepblue-networks-ayc-03.png"
                alt="Oliver Drost"
              />
              <p>
                <strong>Oliver Drost</strong> <br /> CCO
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2017/01/deepblue-networks-ayc-02.png"
                alt="Florian"
              />
              <p>
                <strong>Florian Liebold</strong> <br />
                CEO
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2017/01/deepblue-networks-ayc-01.png"
                alt="Helmut Koch"
              />
              <p>
                <strong>Helmut Koch</strong> <br />
                CFO
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/11/deepblue-networks-heiko-Quant.png"
                alt="Heiko Quant"
              />
              <p>
                <strong>Heiko Quant</strong> <br /> GL New Business
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/11/tanja.png"
                alt="Tanja Schmidt"
              />
              <p>
                <strong>Tanja Schmidt</strong> <br />
                Head of Human Resources
              </p>
            </div>
            <div className="item">
              <img
                src="https://www.db-n.com/wp-content/uploads/2018/11/christian.png"
                alt="Christian Thron"
              />
              <p>
                <strong>Christian Thron</strong> <br />
                GL Creative
              </p>
            </div>
          </div>
        </div>
        <div className="home-discover">
          <div className="home-discover__content">
            <div className="heading">
              <span>Entdecke mit Lu</span> <br /> das Kreative Haus.
            </div>
            <div className="text">
              Mach' mit Chatbot Lu einen Rundgang durch die Agentur.
              Sie erzählt aus dem Alltag und von besonderen Momenten,
              zeigt dir Kollegen und Projekte.
            </div>
            <button className="btn blue">
              <Link to="##">Ich bin dabei</Link>
            </button>
          </div>
          <div className="home-discover__image">
            <img
              src="https://www.db-n.com/wp-content/uploads/2018/07/LU-Teaser@2x-1.png"
              alt="LU"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
