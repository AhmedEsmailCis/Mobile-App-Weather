import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DFsDailyDataContainer(props) {
  return (
    <View style={styles.statisticsContainer}>
      <View>
        <Text>Feels Like</Text>
        <Text>Humidity</Text>
      </View>
      <View>
        <Text style={styles.number}>{props.feelLike.toFixed(1)}%</Text>
        <Text style={styles.number}>{props.humidity}%</Text>
      </View>
      <View>
        <Text>Wind</Text>
        <Text>Pressure</Text>
      </View>
      <View>
        <Text style={styles.number}>
          {(props.windSpeed * 3.6).toFixed(1)} Km/h
        </Text>
        <Text style={styles.number}>{props.pressure} hPa</Text>
      </View>
    </View>
  );
}
export default DFsDailyDataContainer;
const styles = StyleSheet.create({
  number: {
    color: 'grey',
  },
  statisticsContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderTopWidth: 0.5,
    borderColor: 'grey',
  },
});
