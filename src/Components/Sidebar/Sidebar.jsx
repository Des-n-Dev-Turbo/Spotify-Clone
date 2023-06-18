import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
  LibraryMusicOutlined as LibraryMusicIcon,
} from '@mui/icons-material';

import { useDataLayerValue } from '../../store/DataLayer';
import SidebarOptions from '../SidebarOptions/SidebarOptions';

import './Sidebar.css';

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return <SidebarOptions title={playlist.name} key={playlist.snapshot_id} />;
      })}
    </div>
  );
};

export default Sidebar;
