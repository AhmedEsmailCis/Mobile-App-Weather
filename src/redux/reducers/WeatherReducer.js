const initialState = {
  lat: 0,
  lon: 0,
  weatherData: [],
  cityName: "",
  countryName: "",
  loader: false,
  searchCheck: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "setWeatherData":
      return {
        ...state,
        weatherData: action.weatherData,
      };
    case "updateLoader":
      return {
        ...state,
        loader: action.loader,
      };
    case "updateLocation":
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    case "successSearching":
      return {
        ...state,
        searchCheck: action.searchCheck,
      };
    case "setCityAndCountryName":
      return {
        ...state,
        cityName: action.cityName,
        countryName: action.countryName,
      };
    default:
      return state;
  }
};
