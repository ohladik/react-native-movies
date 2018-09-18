import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

class ButtonBack extends Component {

  render() {
    const {
      topBar,
      backButton,
      backButtonText
     } = styles;

    return (
        <View style={topBar}>
          <TouchableOpacity
            style={backButton}
            onPress={() => Actions.movies({ type: 'back' })}
          >
            <Text style={backButtonText}>
            <Icon name="arrow-back" color="#fff" size={16} />
            BACK
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = {
  topBar: {
    height: height * 0.1
  },
  backButton: {
    padding: height * 0.04,
    width: width * 0.3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16
  }
};

export default ButtonBack;
