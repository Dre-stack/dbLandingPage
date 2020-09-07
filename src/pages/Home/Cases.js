import React from 'react';
import { Link } from 'react-router-dom';

function Cases() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Cases;
