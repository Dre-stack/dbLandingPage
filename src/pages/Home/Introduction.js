import React from 'react';
import { Link } from 'react-router-dom';

function Introduction() {
  return (
    <React.Fragment>
      <div className="home-introduction__text">
        <div className="heading">
          <span>Willkommen</span> <br /> im Kreativen Haus.
        </div>
        <div className="content">
          <p>
            Wir verbinden Strategie, Kreativität und Technologie unter
            einem Dach und sind Ihr Partner für erfolgreiche digitale
            Produkte, Marken und Kampagnen aus einer Hand. So helfen
            wir Marken und Unternehmen fit für den Konsumenten von
            heute zu werden, der mehr erwartet, als nur ein gutes
            Produkt.
          </p>
          <p>
            deepblue begleitet seit Jahren Unternehmen auf dem Weg
            Richtung Customer Centricity und liefert Stabilität,
            Steuerung und ganzheitliche Lösungen für jede Phase der
            Customer Journey. Unser Weg: von der Marken-Botschaft zum
            Marken-Erlebnis.
          </p>
          <p>
            Wir glauben an Technologie, die beeindruckt. Und lieben
            Ideen, die begeistern. Mit der Marke im Fokus verbinden
            wir Kreativität und Innovation und entfachen so
            unwiderstehliche Kraft über alle Kanäle.
          </p>
          <p>
            Wir arbeiten dabei iterativ und agil in skalierbaren Teams
            mit unseren Kunden an vielen Orten.
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
    </React.Fragment>
  );
}

export default Introduction;
