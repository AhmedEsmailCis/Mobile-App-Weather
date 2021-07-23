import * as React from "react";
import { View, Image, Dimensions, BackHandler, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import ExitIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SearchIcon from "react-native-vector-icons/MaterialIcons";
import TabNavigator from "./TabNavigator";
import { IMAGES } from "../common";

const windowHeight = Dimensions.get("window").height;

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // drawerType={ 'slide'}
      initialRouteName="TabsScreen"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TabsScreen" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <View style={styles.flex}>
      <Image source={IMAGES.drawer} style={styles.image} />
      <DrawerContentScrollView {...props}>
        <DrawerItem
          onPress={() => {
            props.navigation.navigate("weatherDetails");
          }}
          label="Weather details"
          icon={({ size }) => (
            <MaterialCommunityIcons name="weather-night-partly-cloudy" color="black" size={size} />
          )}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate("search");
          }}
          label="City search"
          icon={({ size }) => <SearchIcon name="location-city" color="black" size={size} />}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate("map");
          }}
          label="Map"
          icon={({ size }) => (
            <MaterialCommunityIcons name="map-search-outline" color="black" size={size} />
          )}
        />
      </DrawerContentScrollView>
      <DrawerItem
        onPress={() => {
          BackHandler.exitApp();
        }}
        label="Exit"
        icon={({ size }) => <ExitIcon name="exit-outline" color="black" size={size} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  flex: { flex: 1 },
  image: {
    width: "100%",
    height: windowHeight * 0.2,
  },
});
