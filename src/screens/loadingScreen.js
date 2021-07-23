import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Geolocation from "@react-native-community/geolocation";
import { getDataOfWeather } from "../redux/actions";
import { IMAGES } from "../common";

const windowHeight = Dimensions.get("window").height;
export const LoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.weatherRdx.loader);
  const weatherData = useSelector((state) => state.weatherRdx.weatherData);
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      dispatch(
        getDataOfWeather({
          lat: info.coords.latitude,
          lon: info.coords.longitude,
        }),
      );
    });
  }, []);
  useEffect(() => {
    if (weatherData.length != 0) {
      navigation.replace("WeatherApp");
    }
  }, [weatherData, loader]);
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor="#000035" />
      <ImageBackground source={IMAGES.loading} style={styles.backgroundImage}>
        {loader ? (
          <ActivityIndicator
            style={{ marginTop: windowHeight * 0.25 }}
            size="large"
            color="green"
          />
        ) : null}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  view: { flex: 1 },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
});
