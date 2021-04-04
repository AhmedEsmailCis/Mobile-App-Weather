import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import EnterIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {setWeatherData} from '../redux/actions';
import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';
const apiId = 'd582a3a2994ebdaa28a41048a5d3b990';
const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const units = 'metric';
class LoadingScreen extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      weatherData: [],
      loader: true,
    };
  }
  componentDidMount() {
    this.getCurrentLocation();
  }
  getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      this.setState({lat: info.coords.latitude});
      this.setState({lon: info.coords.longitude});
      this.loadWeatherData();
    });
  };
  loadWeatherData = async () => {
    const url =
      apiUrl +
      '?lat=' +
      this.state.lat.toString() +
      '&lon=' +
      this.state.lon.toString() +
      '&units=' +
      units +
      '&appid=' +
      apiId;
    const x = await Axios.get(url);
    this.setState({weatherData: x.data});
    const {lat, lon, weatherData} = this.state;
    this.props.setWeatherData({lat, lon, weatherData});
    this.setState({loader: false});
    this.props.navigation.navigate('WeatherApp');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#171928" />
        <ImageBackground
          source={require('../../images/homeCover.jpg')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.state.loader ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={{flex:1, justifyContent:'flex-end',margin:50,}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('WeatherApp');
                }}>
                <EnterIcon name="enter-outline" size={70} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}
export default connect(null, {setWeatherData})(LoadingScreen);
