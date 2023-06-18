/* eslint-disable react/prop-types */
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

import './Player.css';

const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
