import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { DFsHeader, DFsDailyDataContainer, DFsDailyButton } from "../components";

export const DailyForecastScreen = ({ navigation }) => {
  const weatherData = useSelector((state) => state.weatherRdx.weatherData);
  const cityName = useSelector((state) => state.weatherRdx.cityName);
  const countryName = useSelector((state) => state.weatherRdx.countryName);
  const [activeDt, setActiveDt] = useState(weatherData.daily[0].dt);
  const [feelLike, setFeelLike] = useState(weatherData.daily[0].feels_like.day);
  const [windSpeed, setWindSpeed] = useState(weatherData.daily[0].wind_speed);
  const [humidity, setHumidity] = useState(weatherData.daily[0].humidity);
  const [pressure, setPressure] = useState(weatherData.daily[0].pressure);
  return (
    <View style={styles.view}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <DFsHeader cityName={cityName} countryName={countryName} navigation={navigation} />
      <Text style={styles.label}>Next 7 days</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {weatherData.daily.map((i, k) => (
          <View key={i.dt}>
            <View
              style={i.dt === activeDt ? styles.activeContainerOfButton : styles.containerOfButton}>
              <DFsDailyButton
                k={k}
                dt={i.dt}
                minTemp={i.temp.min}
                maxTemp={i.temp.max}
                icon={i.weather[0].icon}
                onPress={() => {
                  setActiveDt(i.dt);
                  setFeelLike(i.feels_like.day);
                  setWindSpeed(i.wind_speed);
                  setHumidity(i.humidity);
                  setPressure(i.pressure);
                }}
              />
            </View>
            {i.dt === activeDt ? (
              <DFsDailyDataContainer
                feelLike={feelLike}
                humidity={humidity}
                windSpeed={windSpeed}
                pressure={pressure}
              />
            ) : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  view: { flex: 1 },
  label: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  containerOfButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  activeContainerOfButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
