import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import {connect} from 'react-redux';
import {getDataOfWeather} from '../redux/actions';
import Geolocation from '@react-native-community/geolocation';
class LoadingScreen extends Component {
  componentDidMount() {
    this.getCurrentLocation();
  }
  getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      this.props.getDataOfWeather({
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      });
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.weatherData.length != 0) {
      this.props.navigation.navigate('WeatherApp');
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#000035" />
        <ImageBackground
          source={require('../../images/loading.png')}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {this.props.loader ? (
            <ActivityIndicator
              style={{marginTop: windowHeight * 0.25}}
              size="large"
              color="green"
            />
          ) : null}
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherRdx.weatherData,
    loader: state.weatherRdx.loader,
  };
};
export default connect(mapStateToProps, {getDataOfWeather})(LoadingScreen);
