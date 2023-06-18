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

import { useDataLayerValue } from '../../store/DataLayer';

import './Footer.css';

const Footer = () => {
  const [volume, setVolume] = useState(75);
  const [{ discoverWeekly }] = useDataLayerValue();

  const firstTrack = discoverWeekly?.tracks.items[0].track;

  return (
    <div className="footer">
      <div className="footer__left">
        <img src={discoverWeekly?.images[0].url} alt={discoverWeekly?.name} className="footer__album-logo" />
        <div className="footer__song-info">
          <h4>{firstTrack?.name}</h4>
          <p>{firstTrack?.artists.map((artist) => artist?.name).join(', ')}</p>
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
