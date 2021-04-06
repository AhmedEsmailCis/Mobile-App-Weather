import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapIcon from 'react-native-vector-icons/FontAwesome5';
import SearchIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherScreen from './screens/WeatherScreen';
import SearchScreen from './screens/SearchScreen';
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: '#62615F',
        activeBackgroundColor: '#1E3889',
        inactiveBackgroundColor: '#00327B',
        //labelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        name="weatherDetails"
        component={WeatherScreen}
        options={{
          tabBarLabel: 'weather',
          //tabBarBadge: 'aaa',
          tabBarIcon: ({color, size}) => (
            <WeatherIcon
              name={'weather-partly-rainy'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color, size}) => (
            <SearchIcon
              color={color}
              name={'cloud-search-outline'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'map',
          tabBarIcon: ({color, size}) => (
            <MapIcon name={'map-marked-alt'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Favorite');
        }}>
        <Text style={{color: 'black'}}>settings</Text>
      </TouchableOpacity>
    </View>
  );
}
