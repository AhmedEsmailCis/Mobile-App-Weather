import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useFocusEffect } from "@react-navigation/native";
import { getDataOfWeather } from "../redux/actions";
import { IMAGES } from "../common";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const MapScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.weatherRdx.loader);
  const lat = useSelector((state) => state.weatherRdx.lat);
  const lon = useSelector((state) => state.weatherRdx.lon);
  const [finding, setfinding] = useState(false);
  const [region, setRegoin] = useState({
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  });
  const onRegionChange = (reg) => {
    setRegoin(reg);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setfinding(false);
      setRegoin({
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      });
    }, []),
  );
  useEffect(() => {
    if (!loader && finding) {
      navigation.navigate("weatherDetails");
    }
  }, [loader, finding]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEEBE1" />
      <MapView
        initialRegion={region}
        onRegionChange={onRegionChange}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}>
        <Marker
          image={IMAGES.marker}
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const { latitude, longitude } = region;
          dispatch(getDataOfWeather({ lat: latitude, lon: longitude }));
          setfinding(true);
        }}>
        {loader ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <Text style={styles.label}>Find Weather</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "40%",
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    bottom: windowHeight * 0.23,
    borderWidth: 2.5,
    borderColor: "white",
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },
});
