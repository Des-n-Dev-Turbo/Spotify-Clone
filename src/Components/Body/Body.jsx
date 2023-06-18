/* eslint-disable react/prop-types */
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';

import { useDataLayerValue } from '../../store/DataLayer';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';

import './Body.css';

const Body = () => {
  const [{ discoverWeekly }] = useDataLayerValue();

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={discoverWeekly?.images[0]?.url} alt={discoverWeekly?.name} />
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffled" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discoverWeekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} key={item.track.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
