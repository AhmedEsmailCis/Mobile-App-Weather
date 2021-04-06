import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {search} from '../redux/actions';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchCheck) {
      this.props.navigation.navigate('weatherDetails');
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000035'}}>
        <StatusBar backgroundColor="#1F1B2C" />
        <ImageBackground
          source={require('../../images/search.png')}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={styles.buttonView}>
            <TextInput
              placeholder="Enter The City Name"
              placeholderTextColor="grey"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({inputValue: text});
              }}
              style={styles.inputStyle}
            />
            <TouchableOpacity
              onPress={() => {
                const {inputValue} = this.state;
                this.props.search({cityName: inputValue});
              }}
              style={styles.searchButton}>
              {this.props.loader ? (
                <ActivityIndicator size="large" color="blue" />
              ) : (
                <SearchIcon size={28} color="blue" name="search" />
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loader: state.weatherRdx.loader,
    searchCheck: state.weatherRdx.searchCheck,
  };
};
export default connect(mapStateToProps, {search})(SearchScreen);
const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  inputStyle: {flex: 4, marginLeft: 20},
});
