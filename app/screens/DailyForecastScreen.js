import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import DFsHeader from './../components/DFsHeader';
import DFsDailyDataContainer from './../components/DFsDailyDataContainer';
import DFsDailyButton from './../components/DFsDailyButton';
function DailyForecastScreen(props) {
  const [activeDt, setActiveDt] = useState(props.weatherData.daily[0].dt);
  const [feelLike, setFeelLike] = useState(
    props.weatherData.daily[0].feels_like.day,
  );
  const [windSpeed, setWindSpeed] = useState(
    props.weatherData.daily[0].wind_speed,
  );
  const [humidity, setHumidity] = useState(props.weatherData.daily[0].humidity);
  const [pressure, setPressure] = useState(props.weatherData.daily[0].pressure);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <DFsHeader
        cityName={props.cityName}
        countryName={props.countryName}
        navigation={props.navigation}
      />
      <Text style={styles.label}>Next 7 days</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.weatherData.daily.map((i, k) => (
          <View key={i.dt}>
            <View
              style={
                i.dt === activeDt
                  ? styles.activeContainerOfButton
                  : styles.containerOfButton
              }>
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
}
const mapStateToProps = (state) => {
  return {
    lat: state.weatherRdx.lat,
    lon: state.weatherRdx.lon,
    weatherData: state.weatherRdx.weatherData,
    cityName: state.weatherRdx.cityName,
    countryName: state.weatherRdx.countryName,
  };
};
export default connect(mapStateToProps, null)(DailyForecastScreen);
const styles = StyleSheet.create({
  label: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerOfButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activeContainerOfButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
