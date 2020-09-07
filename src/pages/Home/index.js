import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Introduction from './Introduction';
import Stats from './Stats';
import Reasons from './Reasons';
import Hooked from './Hooked';
import Current from './Current';
import Cases from './Cases';
import Contacts from './Contacts';
import Discovery from './Discovery';

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
          <Introduction />
        </div>
        <div className="home-stats">
          <Stats />
        </div>
        <div className="home-reasons">
          {' '}
          <Reasons />
        </div>
        <div className="home-hooked">
          <Hooked />
        </div>
        <div className="home-current">
          <Current />
        </div>
        <div className="home-cases">
          <Cases />
        </div>
        <div className="home-contacts">
          <Contacts />
        </div>
        <div className="home-discover">
          <Discovery />
        </div>
      </div>
    </div>
  );
}

export default Home;
