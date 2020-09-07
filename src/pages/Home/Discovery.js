import React from 'react';
import { Link } from 'react-router-dom';

function Discovery() {
  return (
    <React.Fragment>
      <div className="home-discover__content">
        <div className="heading">
          <span>Entdecke mit Lu</span> <br /> das Kreative Haus.
        </div>
        <div className="text">
          Mach' mit Chatbot Lu einen Rundgang durch die Agentur. Sie
          erzählt aus dem Alltag und von besonderen Momenten, zeigt
          dir Kollegen und Projekte.
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
    </React.Fragment>
  );
}

export default Discovery;
