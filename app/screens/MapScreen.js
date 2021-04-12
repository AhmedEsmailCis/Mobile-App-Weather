import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {getDataOfWeather} from '../redux/actions';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps'; 
const windowHeight=Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: props.lat,
        longitude: props.lon,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
    };
  }
  onRegionChange = (region) => {
    this.setState({region: region});
  };
  UNSAFE_componentWillReceiveProps(nextProps){
    if (!nextProps.loader) {
      this.props.navigation.navigate('weatherDetails');
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#EEEBE1" />
        <MapView
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}>
          <Marker
            image={require('../../images/marker.png')}
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
          />
        </MapView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const {latitude, longitude} = this.state.region;
            this.props.getDataOfWeather({lat: latitude, lon: longitude});
          }}>
          {this.props.loader ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.label}>Find Weather</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //weatherData: state.weatherRdx.weatherData,
    loader: state.weatherRdx.loader,
    lat: state.weatherRdx.lat,
    lon: state.weatherRdx.lon,
    searchCheck: state.weatherRdx.searchCheck,
  };
};
export default connect(mapStateToProps, {getDataOfWeather})(MapScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    //backgroundColor: '#EEEBE1',
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    bottom: windowHeight * 0.23,
    borderWidth: 2.5,
    borderColor: "white",
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
