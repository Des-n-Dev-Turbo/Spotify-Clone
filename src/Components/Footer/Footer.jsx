import { useState } from 'react';
import { Unstable_Grid2 as Grid, Slider } from '@mui/material';
import {
  PlayCircle,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeUp,
  VolumeMute,
} from '@mui/icons-material';

import './Footer.css';

const Footer = () => {
  const [volume, setVolume] = useState(75);

  return (
    <div className="footer">
      <div className="footer__left">
        <img src="" alt="" className="footer__album-logo" />
        <div className="footer__song-info">
          <h4>Name</h4>
          <p>Artist</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircle fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid>
            <PlaylistPlay />
          </Grid>
          <Grid>{volume < 50 ? volume === 0 ? <VolumeMute /> : <VolumeDown /> : <VolumeUp />}</Grid>
          <Grid xs>
            <Slider value={volume} onChange={(e) => setVolume(e.target.value)} max={100} step={10} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
