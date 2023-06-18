export const initialState = {
  user: null,
  playlists: [],
  playing: null,
  item: null,
  token: null,
  discoverWeekly: null,
};

export const types = {
  setUser: 'SET_USER',
  setToken: 'SET_TOKEN',
  setPlaylists: 'SET_PLAYLISTS',
  setDiscoverWeekly: 'SET_DISCOVER_WEEKLY',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.setUser:
      return { ...state, user: action.payload.user };
    case types.setToken:
      return { ...state, token: action.payload.token };
    case types.setPlaylists:
      return { ...state, playlists: action.payload.playlists };
    case types.setDiscoverWeekly:
      return { ...state, discoverWeekly: action.payload.discoverWeekly };
    default:
      return state;
  }
};

export default reducer;
