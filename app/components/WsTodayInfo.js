import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
function WsTodayInfo(props) {
  return (
    <View style={styles.screenStyle}>
      <Text style={styles.dayStyle}>Today</Text>
      <Text style={styles.dateStyle}>{props.date}</Text>
      <View style={styles.tempTextContainer}>
        <Text style={styles.tempStyle}>{props.temp}</Text>
        <Text style={styles.celStyle}>°C</Text>
      </View>
      <Text style={styles.fellsLikeStyle}>Feels like {props.feelsLike}°</Text>
    </View>
  );
}
export default WsTodayInfo;
const styles = StyleSheet.create({
  dayStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  dateStyle: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 13,
  },
  tempTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20, //
  },
  tempStyle: {
    color: 'white',
    fontSize: 45,
  },
  celStyle: {
    color: 'white',
    fontSize: 20,
    paddingTop: 10,
  },
  fellsLikeStyle: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 13,
  },
});
