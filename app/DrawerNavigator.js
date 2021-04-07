import * as React from 'react';
import {View, Image, Dimensions, BackHandler} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import MapIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/MaterialIcons';
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      //drawerType={ 'slide'}
      initialRouteName="TabsScreen"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TabsScreen" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/drawer.png')}
        style={{
          width: '100%',
          height: windowHeight * 0.2,
        }}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('weatherDetails');
          }}
          label="Weather details"
          icon={({size}) => (
            <WeatherIcon
              name={'weather-night-partly-cloudy'}
              color="black"
              size={size}
            />
          )}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('search');
          }}
          label="City search"
          icon={({size}) => (
            <SearchIcon name={'location-city'} color="black" size={size} />
          )}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('map');
          }}
          label="Map"
          icon={({size}) => (
            <MapIcon name={'map-search-outline'} color="black" size={size} />
          )}
        />
      </DrawerContentScrollView>
      <DrawerItem
        onPress={() => {
          BackHandler.exitApp();
        }}
        label="Exit"
        icon={({size}) => (
          <ExitIcon name={'exit-outline'} color="black" size={size} />
        )}
      />
    </View>
  );
}
