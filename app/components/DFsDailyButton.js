import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
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
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + ' ' + month;

  return time;
}
function getWeatherIconUrl(icon) {
  const url = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  return url;
}
function DFsDailyButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.touchAbleButtonStyle}>
      <View style={styles.rowOfDailyContent}>
        <Image
          source={{
            uri: getWeatherIconUrl(props.icon),
          }}
          style={styles.dailyImage}
        />
        <Text style={{fontWeight: 'bold'}}>
          {props.k === 0 ? 'Today' : calcTime(props.dt)}
        </Text>
        <View style={[styles.rowOfDailyContent, {width: 50}]}>
          <Text>{props.minTemp.toFixed(0)}°</Text>
          <Text style={styles.number}>{props.maxTemp.toFixed(0)}°</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default DFsDailyButton;
const styles = StyleSheet.create({
  touchAbleButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  dailyImage: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    margin: 10,
  },
  rowOfDailyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    width: '100%',
  },
});
