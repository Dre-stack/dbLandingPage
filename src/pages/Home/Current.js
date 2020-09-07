import React from 'react';
import { Link } from 'react-router-dom';

function Current() {
  return (
    <React.Fragment>
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
            deepblue networks geht als Matchwinner aus dem aktuellen
            Tipico-Pitch hervor. Der führende Anbieter für
            Sportwetten… ...
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
              DMK Group und deepblue networks mit „Goldener Victoria“
              ausgezeichnet
            </strong>
          </p>
          <p>
            Deutschlands größte Molkereigenossenschaft betreibt einen
            massiven Umbauprozess („Vision 2030“), um sich dem Wandel
            der Konsumentenwünsche… ...
          </p>
        </div>
      </div>
      <button className="btn primary">
        <Link to="##">Alle Presseartikel</Link>
      </button>
    </React.Fragment>
  );
}

export default Current;
