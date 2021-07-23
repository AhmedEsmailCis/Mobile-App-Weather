import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Geolocation from "@react-native-community/geolocation";
import {
  WsHeader,
  WsTodayInfo,
  WsHourlyTopTab,
  WsHourlyButton,
  WsHourlyDataContainer,
} from "../components";
import { getDataOfWeather } from "../redux/actions";
import { calcTime2, calcSunRiseSet, getWeatherIconUrl, IMAGES } from "../common";

export const WeatherScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherRdx.weatherData);
  const loader = useSelector((state) => state.weatherRdx.loader);
  const cityName = useSelector((state) => state.weatherRdx.cityName);
  const countryName = useSelector((state) => state.weatherRdx.countryName);
  const [minCon, setMin] = useState(0); // true >today false> tomorrow
  const [maxCon, setMax] = useState(24); // true >today false> tomorrow
  const [activeHourlyButton, setHourlyButton] = useState(weatherData.hourly[0].dt);
  const [description, setDesc] = useState(weatherData.current.weather[0].description);
  const [icon, setIcon] = useState(weatherData.current.weather[0].icon);
  const [temperature, setTemp] = useState(weatherData.current.temp);
  const [feelLike, setFeelLike] = useState(weatherData.current.feels_like);
  const [humidity, setHumidity] = useState(weatherData.current.humidity);
  const [pressure, setPressure] = useState(weatherData.current.pressure);
  const [windSpeed, setWindSpeed] = useState(weatherData.current.wind_speed);
  const [windDeg, setWindDeg] = useState(weatherData.current.wind_deg);
  const [cloud, setCloud] = useState(weatherData.current.clouds);
  const [dewPoint, setDewPoint] = useState(weatherData.current.dew_point);
  const [visibility, setVisibility] = useState(weatherData.current.visibility);
  const [uvi, setUvi] = useState(weatherData.current.uvi);
  const [dt, setDt] = useState(weatherData.current.dt);
  const currentWeather = (lat, lon) => {
    dispatch(getDataOfWeather({ lat, lon }));
  };
  return (
    <View style={styles.screenStyle}>
      <StatusBar backgroundColor="#171928" />
      <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
        <ImageBackground source={IMAGES.homeCover} style={styles.screenStyle}>
          {loader ? <ActivityIndicator size="small" color="#0000ff" /> : null}
          <WsHeader
            cityName={cityName}
            countryName={countryName}
            navigation={navigation}
            onPress={() => {
              Geolocation.getCurrentPosition((info) => {
                currentWeather(info.coords.latitude, info.coords.longitude);
              });
            }}
          />
          <WsTodayInfo
            date={calcTime2(weatherData.current.dt)}
            temp={weatherData.current.temp.toFixed(1)}
            feelsLike={weatherData.current.feels_like}
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
            navigation={navigation}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weatherData.hourly.map((i, k) =>
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
          windDeg={windDeg}
          cloud={cloud}
          dewPoint={dewPoint}
          visibility={visibility}
          uvi={uvi}
          sunrise={calcSunRiseSet(weatherData.current.sunrise)}
          sunset={calcSunRiseSet(weatherData.current.sunset)}
          dt={calcTime2(dt)}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: "#506BB0",
  },
});
