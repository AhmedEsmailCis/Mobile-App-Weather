import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BackIcon from "react-native-vector-icons/Ionicons";

export const DFsHeader = ({ cityName, countryName, navigation }) => {
  return (
    <View>
      <Text style={styles.city}>
        {cityName}/ {countryName}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("weatherDetails");
        }}>
        <BackIcon name="chevron-back-outline" size={30} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  city: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  backIcon: {
    bottom: 25,
    marginLeft: 20,
  },
});
