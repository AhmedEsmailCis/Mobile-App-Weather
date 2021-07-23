import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapIcon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { WeatherScreen, MapScreen, SearchScreen } from "../screens";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        inactiveTintColor: "#62615F",
        activeBackgroundColor: "#1E3889",
        inactiveBackgroundColor: "#00327B",
        // labelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        name="weatherDetails"
        component={WeatherScreen}
        options={{
          tabBarLabel: "weather",
          // tabBarBadge: 'aaa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weather-partly-rainy" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: "search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="cloud-search-outline" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarLabel: "map",
          tabBarIcon: ({ color, size }) => (
            <MapIcon name="map-marked-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
