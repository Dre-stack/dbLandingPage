import React from 'react';

function Discovery() {
  return (
    <React.Fragment>
      <div className="home-contacts__heading">Ansprechpartner</div>
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
    </React.Fragment>
  );
}

export default Discovery;
