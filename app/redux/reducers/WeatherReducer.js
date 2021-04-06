const initialState = {
  lat: 0,
  lon: 0,
  weatherData: [],
  loader: false,
  searchCheck:false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'setWeatherData':
      return {
        ...state,
        weatherData: action.weatherData,
      };
    case 'updateLoader':
      return {
        ...state,
        loader: action.loader,
      };
    case 'updateLocation':
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    case 'successSearching':
      return {
        ...state,
        searchCheck: action.searchCheck,
      };
    default:
      return state;
  }
};

