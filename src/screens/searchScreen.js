import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "react-native-vector-icons/FontAwesome";
import { search } from "../redux/actions";
import { IMAGES } from "../common";

export const SearchScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputVal] = useState("");
  const loader = useSelector((state) => state.weatherRdx.loader);
  const searchCheck = useSelector((state) => state.weatherRdx.searchCheck);
  useEffect(() => {
    if (searchCheck) {
      navigation.navigate("weatherDetails");
    }
  }, [searchCheck]);
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#1F1B2C" />
      <ImageBackground source={IMAGES.search} style={styles.backGround}>
        <View style={styles.buttonView}>
          <TextInput
            placeholder="Enter The City Name"
            placeholderTextColor="grey"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setInputVal(text);
            }}
            style={styles.inputStyle}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(search({ cityName: inputValue }));
            }}
            style={styles.searchButton}>
            {loader ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              <SearchIcon size={28} color="blue" name="search" />
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#000035" },
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  buttonView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
  },
  searchButton: { flex: 1, justifyContent: "center", alignItems: "center" },
  inputStyle: { flex: 4, marginLeft: 20 },
});
