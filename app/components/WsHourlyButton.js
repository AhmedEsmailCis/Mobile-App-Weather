import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
function calcHour(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000);
  var hour = a.getHours();
  const unit = hour >= 12 ? 'pm' : 'Am';
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  const zero = hour < 10 ? '0' : '';
  var time = hour + ' ' + unit;
  return time;
}
function WsHourlyButton(props) {
  return (
    <View>
      <View style={styles.hourlyTempContainer} >
        <Text
          style={
            props.activeHourlyButton == props.dt
              ? styles.ActiveHourlyTime
              : styles.hourlyTime
          }>
          {calcHour(props.dt)}
        </Text>
        <View
          style={
            props.activeHourlyButton == props.dt
              ? styles.ActiveHourlyTempWithIcon
              : styles.hourlyTempWithIcon
          }>
          <TouchableOpacity
            style={styles.touchableForHourlyButton}
            onPress={props.onPress}>
            <Image
              source={{
                uri: props.uri,
              }}
              style={styles.hourlyImage}
            />
            <Text
              style={
                props.activeHourlyButton == props.dt
                  ? styles.ActiveHourlyTemp
                  : styles.hourlyTemp
              }>
              {props.temp.toFixed(1)}°
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default WsHourlyButton;
const styles = StyleSheet.create({
  hourlyImage: {
    width: 40,
    height: 40,
  },
  hourlyTempContainer: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  ActiveHourlyTemp: {
    color: 'black',
    fontSize: 15,
  },
  ActiveHourlyTime: {
    color: 'white',
  },
  ActiveHourlyTempWithIcon: {
    backgroundColor: 'white',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    height: '70%',
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  hourlyTemp: {
    color: 'white',
    fontSize: 15,
  },
  hourlyTime: {
    color: 'grey',
  },
  hourlyTempWithIcon: {
    backgroundColor: '#595856',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    height: '70%',
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  touchableForHourlyButton: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    borderRadius: 30,
  },
});
