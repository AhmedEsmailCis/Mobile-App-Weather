import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import WsHeader from './../components/WsHeader';
import WsTodayInfo from './../components/WsTodayInfo';
import WsHourlyTopTab from './../components/WsHourlyTopTab';
import WsHourlyButton from './../components/WsHourlyButton';
import WsHourlyDataContainer from './../components/WsHourlyDataContainer';
import {getDataOfWeather} from '../redux/actions';
import Geolocation from '@react-native-community/geolocation';
function calcTime(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000);
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date +
    ' ' +
    month +
    ' ' +
    year +
    ' ' +
    (hour < 10 ? '0' : '') +
    hour +
    ':' +
    (min < 10 ? '0' : '') +
    min +
    ':' +
    (sec < 10 ? '0' : '') +
    sec;
  return time;
}
function calcSunRiseSet(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000);
  var hour = a.getHours();
  const unit = hour >= 12 ? 'pm' : 'Am';
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  const zero = hour < 10 ? '0' : '';
  var min = a.getMinutes();
  var time =
    (hour < 10 ? '0' : '') +
    hour +
    ':' +
    (min < 10 ? '0' : '') +
    min +
    ' ' +
    unit;
  return time;
}
function getWeatherIconUrl(icon) {
  const url = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  return url;
}

function WeatherScreen(props) {
  const [minCon, setMin] = useState(0); //true >today false> tomorrow
  const [maxCon, setMax] = useState(24); //true >today false> tomorrow
  const [activeHourlyButton, setHourlyButton] = useState(
    props.weatherData.hourly[0].dt,
  );
  const [description, setDesc] = useState(
    props.weatherData.current.weather[0].description,
  );
  const [icon, setIcon] = useState(props.weatherData.current.weather[0].icon);
  const [temperature, setTemp] = useState(props.weatherData.current.temp);
  const [feelLike, setFeelLike] = useState(
    props.weatherData.current.feels_like,
  );
  const [humidity, setHumidity] = useState(props.weatherData.current.humidity);
  const [pressure, setPressure] = useState(props.weatherData.current.pressure);
  const [windSpeed, setWindSpeed] = useState(
    props.weatherData.current.wind_speed,
  );
  const [wind_deg, setWindDeg] = useState(props.weatherData.current.wind_deg);
  const [cloud, setCloud] = useState(props.weatherData.current.clouds);
  const [dew_point, setDewPoint] = useState(
    props.weatherData.current.dew_point,
  );
  const [visibility, setVisibility] = useState(
    props.weatherData.current.visibility,
  );
  const [uvi, setUvi] = useState(props.weatherData.current.uvi);
  const [dt, setDt] = useState(props.weatherData.current.dt);
  const currentWeather=(lat, lon) =>{
    props.getDataOfWeather({lat,lon});
  }
  return (
    <View style={styles.screenStyle}>
      <StatusBar backgroundColor="#171928" />
      <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../images/homeCover.jpg')}
          style={styles.screenStyle}>
          {props.loader ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : null}
          <WsHeader
            cityName={props.cityName}
            countryName={props.countryName}
            navigation={props.navigation}
            onPress={() => {
              Geolocation.getCurrentPosition((info) => {
                currentWeather(info.coords.latitude, info.coords.longitude);
              });
            }}
          />
          <WsTodayInfo
            date={calcTime(props.weatherData.current.dt)}
            temp={props.weatherData.current.temp.toFixed(1)}
            feelsLike={props.weatherData.current.feels_like}
          />
          <WsHourlyTopTab
            maxCon={maxCon}
            todayOnPress={() => {
              setMin(0);
              setMax(24);
            }}
            tomorrowOnPress={() => {
              setMin(24);
              setMax(64);
            }}
            navigation={props.navigation}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.weatherData.hourly.map((i, k) =>
              k < maxCon && k >= minCon ? (
                <WsHourlyButton
                  dt={i.dt}
                  key={i.dt}
                  activeHourlyButton={activeHourlyButton}
                  uri={getWeatherIconUrl(i.weather[0].icon)}
                  temp={i.temp}
                  onPress={() => {
                    setHourlyButton(i.dt);
                    setDesc(i.weather[0].description);
                    setIcon(i.weather[0].icon);
                    setTemp(i.temp);
                    setFeelLike(i.feels_like);
                    setHumidity(i.humidity);
                    setPressure(i.pressure);
                    setWindSpeed(i.wind_speed);
                    setWindDeg(i.wind_deg);
                    setCloud(i.clouds);
                    setDewPoint(i.dew_point);
                    setVisibility(i.visibility);
                    setUvi(i.uvi);
                    setDt(i.dt);
                  }}
                />
              ) : null,
            )}
          </ScrollView>
        </ImageBackground>
        <WsHourlyDataContainer
          description={description}
          iconUri={getWeatherIconUrl(icon)}
          temperature={temperature}
          feelLike={feelLike}
          humidity={humidity}
          pressure={pressure}
          windSpeed={windSpeed}
          wind_deg={wind_deg}
          cloud={cloud}
          dew_point={dew_point}
          visibility={visibility}
          uvi={uvi}
          sunrise={calcSunRiseSet(props.weatherData.current.sunrise)}
          sunset={calcSunRiseSet(props.weatherData.current.sunset)}
          dt={calcTime(dt)}
        />
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherRdx.weatherData,
    loader: state.weatherRdx.loader,
    cityName: state.weatherRdx.cityName,
    countryName: state.weatherRdx.countryName,
  };
};
export default connect(mapStateToProps, {getDataOfWeather})(WeatherScreen);
const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: '#506BB0',
  },
});
