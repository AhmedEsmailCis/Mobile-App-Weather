import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons'; 
import CurrentLocationIcon from 'react-native-vector-icons/FontAwesome5';
function WsHeader(props) {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <MenuIcon color="white" name={'menu'} size={33} />
      </TouchableOpacity>
      <Text style={styles.cityStyle}>
        {props.cityName} / {props.countryName}
      </Text>

      <TouchableOpacity onPress={props.onPress}>
        <CurrentLocationIcon name={'location-arrow'} size={23} color="white" />
      </TouchableOpacity>
    </View>
  );
}
export default WsHeader;
const styles = StyleSheet.create({
  cityStyle: {
    color: 'white',
    fontSize: 15,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
});
