import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { calcTime, getWeatherIconUrl } from "../common";

export const DFsDailyButton = ({ onPress, icon, k, dt, minTemp, maxTemp }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchAbleButtonStyle}>
      <View style={styles.rowOfDailyContent}>
        <Image
          source={{
            uri: getWeatherIconUrl(icon),
          }}
          style={styles.dailyImage}
        />
        <Text style={styles.calcTime}>{k === 0 ? "Today" : calcTime(dt)}</Text>
        <View style={[styles.rowOfDailyContent, styles.customWidth]}>
          <Text>{minTemp.toFixed(0)}°</Text>
          <Text style={styles.number}>{maxTemp.toFixed(0)}°</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  number: {
    color: "grey",
  },
  touchAbleButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  dailyImage: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    margin: 10,
  },
  rowOfDailyContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    width: "100%",
  },
  calcTime: { fontWeight: "bold" },
  customWidth: { width: 50 },
});
