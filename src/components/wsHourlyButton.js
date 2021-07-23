import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { calcHour } from "../common";

export const WsHourlyButton = ({ activeHourlyButton, dt, onPress, uri, temp }) => {
  return (
    <View>
      <View style={styles.hourlyTempContainer}>
        <Text style={activeHourlyButton == dt ? styles.ActiveHourlyTime : styles.hourlyTime}>
          {calcHour(dt)}
        </Text>
        <View
          style={
            activeHourlyButton == dt ? styles.ActiveHourlyTempWithIcon : styles.hourlyTempWithIcon
          }>
          <TouchableOpacity style={styles.touchableForHourlyButton} onPress={onPress}>
            <Image
              source={{
                uri,
              }}
              style={styles.hourlyImage}
            />
            <Text style={activeHourlyButton == dt ? styles.ActiveHourlyTemp : styles.hourlyTemp}>
              {temp.toFixed(1)}°
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  hourlyImage: {
    width: 40,
    height: 40,
  },
  hourlyTempContainer: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  ActiveHourlyTemp: {
    color: "black",
    fontSize: 15,
  },
  ActiveHourlyTime: {
    color: "white",
  },
  ActiveHourlyTempWithIcon: {
    backgroundColor: "white",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    height: "70%",
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  hourlyTemp: {
    color: "white",
    fontSize: 15,
  },
  hourlyTime: {
    color: "grey",
  },
  hourlyTempWithIcon: {
    backgroundColor: "#595856",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    height: "70%",
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  touchableForHourlyButton: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    borderRadius: 30,
  },
});
