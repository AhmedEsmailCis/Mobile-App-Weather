export const setWeatherData = ({lat, lon, weatherData}) => {
  return {
    type: 'setWeatherData',
    lat: lat,
    lon: lon,
    weatherData: weatherData,
  };
};

