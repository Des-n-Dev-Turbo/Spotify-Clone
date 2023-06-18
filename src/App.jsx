import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Components/Login/Login';
import Player from './Components/Player/Player';

import { useDataLayerValue } from './store/DataLayer';
import { getTokenFromUrl } from './api/spotify';

import './App.css';
import { types } from './store/reducer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: types.setToken, payload: { token: _token } });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: types.setUser, payload: { user } });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: types.setPlaylists, payload: { playlists } });

        spotify.getPlaylist(playlists?.items[0]?.id).then((reponse) => {
          dispatch({ type: types.setDiscoverWeekly, payload: { discoverWeekly: reponse } });
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
