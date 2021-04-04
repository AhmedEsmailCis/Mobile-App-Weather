import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
function WsHourlyTopTab(props) {
  return (
    <View>
      <View style={styles.topTapForDays}>
        <View style={styles.todayAndTomorrow}>
          <TouchableOpacity onPress={props.todayOnPress}>
            <Text
              style={
                props.maxCon == 24
                  ? styles.ActiveItemsInTopTab
                  : styles.itemsInTopTab
              }>
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.tomorrowOnPress}>
            <Text
              style={
                props.maxCon == 64
                  ? styles.ActiveItemsInTopTab
                  : styles.itemsInTopTab
              }>
              Tomorrow
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('DailyForecastScreen');
          }}>
          <Text style={styles.Next7DayItemInTopTab}>Next 7 days ></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
}
export default WsHourlyTopTab;
const styles = StyleSheet.create({
  topTapForDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 15,
  },
  todayAndTomorrow: {
    flexDirection: 'row',
  },
  itemsInTopTab: {
    color: 'grey',
    marginLeft: 15,
    fontSize: 15,
  },
  ActiveItemsInTopTab: {
    color: 'white',
    marginLeft: 15,
    fontSize: 15,
  },
  Next7DayItemInTopTab: {
    color: '#007BF7',
    marginLeft: 15,
    fontSize: 15,
  },
  horizontalLine: {
    backgroundColor: 'grey',
    width: '100%',
    height: 0.5,
    marginTop: 7,
    marginBottom: 7,
  },
});
