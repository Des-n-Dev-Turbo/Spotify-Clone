import { Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';

import { useDataLayerValue } from '../../store/DataLayer';

import './Header.css';

const Header = () => {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs or Podcasts" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
