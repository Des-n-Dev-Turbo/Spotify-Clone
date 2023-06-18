export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectURI = 'http://localhost:5173/';

const clientId = '933b586e664f422ab529e334d4770794';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((inital, item) => {
      let parts = item.split('=');
      inital[parts[0]] = decodeURIComponent(parts[1]);

      return inital;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
