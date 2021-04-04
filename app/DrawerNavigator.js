import * as React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
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
      <DrawerContentScrollView {...props}>
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
        <DrawerItem label="ahmecvhjkjhgfd" />
      </DrawerContentScrollView>
      <DrawerItem label="ahmed" />
    </View>
  );
}
