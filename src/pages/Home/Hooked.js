import React from 'react';
import { Link } from 'react-router-dom';

function Hooked() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Hooked;
