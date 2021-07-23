import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
export const WsHourlyDataContainer = ({
  description,
  iconUri,
  temperature,
  feelLike,
  humidity,
  windDeg,
  pressure,
  cloud,
  dewPoint,
  dt,
  windSpeed,
  sunrise,
  sunset,
  uvi,
  visibility,
}) => {
  return (
    <View style={styles.statisticsContainer}>
      <View style={styles.smallHorLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>DESCRIPTION</Text>
          <Text style={styles.valueStyle}>{description}</Text>
        </View>
        <View style={[styles.valueAndParameterCon, styles.customWidth]}>
          <Image
            source={{
              uri: iconUri,
            }}
            style={styles.iconStyle}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>TEMPERATURE</Text>
          <Text style={styles.valueStyle}>{temperature.toFixed(1)}°</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>FEELS LIKE</Text>
          <Text style={styles.valueStyle}>{feelLike.toFixed(1)}%</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>HUMIDITY</Text>
          <Text style={styles.valueStyle}>{humidity}%</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>PRESSURE</Text>
          <Text style={styles.valueStyle}>{pressure} hPa</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>WIND SPEED</Text>
          <Text style={styles.valueStyle}>{(windSpeed * 3.6).toFixed(1)} Km/h</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>WIND DIRECTION</Text>
          <Text style={styles.valueStyle}>{windDeg} degree</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>CLOUDS</Text>
          <Text style={styles.valueStyle}>{cloud}%</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>DEW POINT</Text>
          <Text style={styles.valueStyle}>{dewPoint.toFixed(1)}°</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>VISIBILITY</Text>
          <Text style={styles.valueStyle}>{visibility} m</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>UVI</Text>
          <Text style={styles.valueStyle}>{uvi}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>SUNRISE</Text>
          <Text style={styles.valueStyle}>{sunrise}</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>SUNSET</Text>
          <Text style={styles.valueStyle}>{sunset}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.time}>
        <Text style={styles.timeValue}>{dt}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  statisticsContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
    alignItems: "center",
    height: windowHeight,
  },
  smallHorLine: {
    backgroundColor: "grey",
    width: 35,
    height: 4,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  valuesOfParametersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    height: 60,
    marginLeft: 20,
  },
  valueAndParameterCon: {
    width: 130,
    justifyContent: "center",
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
  parameterStyle: {
    fontSize: 10,
    color: "grey",
  },
  valueStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  horizontalLine: {
    backgroundColor: "grey",
    width: "90%",
    height: 0.5,
    marginTop: 7,
    marginBottom: 7,
  },
  customWidth: { width: 140 },
});
