const initialState = {
  lat: 0,
  lon: 0,
  weatherData: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'setWeatherData':
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
};
