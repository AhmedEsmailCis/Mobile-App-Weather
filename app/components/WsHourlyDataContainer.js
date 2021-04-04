import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
function WsHourlyDataContainer(props) {
  return (
    <View style={styles.statisticsContainer}>
      <View style={styles.smallHorLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>DESCRIPTION</Text>
          <Text style={styles.valueStyle}>{props.description}</Text>
        </View>
        <View style={[styles.valueAndParameterCon, {width: 140}]}>
          <Image
            source={{
              uri: props.iconUri,
            }}
            style={styles.iconStyle}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>TEMPERATURE</Text>
          <Text style={styles.valueStyle}>{props.temperature.toFixed(1)}°</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>FEELS LIKE</Text>
          <Text style={styles.valueStyle}>{props.feelLike.toFixed(1)}%</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>HUMIDITY</Text>
          <Text style={styles.valueStyle}>{props.humidity}%</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>PRESSURE</Text>
          <Text style={styles.valueStyle}>{props.pressure} hPa</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>WIND SPEED</Text>
          <Text style={styles.valueStyle}>
            {(props.windSpeed * 3.6).toFixed(1)} Km/h
          </Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>WIND DIRECTION</Text>
          <Text style={styles.valueStyle}>{props.wind_deg} degree</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>CLOUDS</Text>
          <Text style={styles.valueStyle}>{props.cloud}%</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>DEW POINT</Text>
          <Text style={styles.valueStyle}>{props.dew_point.toFixed(1)}°</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>VISIBILITY</Text>
          <Text style={styles.valueStyle}>{props.visibility} m</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>UVI</Text>
          <Text style={styles.valueStyle}>{props.uvi}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.valuesOfParametersContainer}>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>SUNRISE</Text>
          <Text style={styles.valueStyle}>{props.sunrise}</Text>
        </View>
        <View style={styles.valueAndParameterCon}>
          <Text style={styles.parameterStyle}>SUNSET</Text>
          <Text style={styles.valueStyle}>{props.sunset}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.time}>
        <Text style={styles.timeValue}>{props.dt}</Text>
      </View>
    </View>
  );
}

export default WsHourlyDataContainer;
const styles = StyleSheet.create({
  statisticsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
    alignItems: 'center',
    height: windowHeight,
  },
  smallHorLine: {
    backgroundColor: 'grey',
    width: 35,
    height: 4,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  valuesOfParametersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 60,
    marginLeft: 20,
  },
  valueAndParameterCon: {
    width: 130,
    justifyContent: 'center',
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
  parameterStyle: {
    fontSize: 10,
    color: 'grey',
  },
  valueStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  horizontalLine: {
    backgroundColor: 'grey',
    width: '90%',
    height: 0.5,
    marginTop: 7,
    marginBottom: 7,
  },
});
