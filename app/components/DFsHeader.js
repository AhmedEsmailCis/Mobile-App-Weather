import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
function DFsHeader(props) {
  return (
    <View>
      <Text style={styles.city}>{props.timezone}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('weatherDetails');
        }}>
        <BackIcon
          name={'chevron-back-outline'}
          size={30}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default DFsHeader;
const styles = StyleSheet.create({
  city: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  backIcon: {
    bottom: 25,
    marginLeft: 20,
  },
});
