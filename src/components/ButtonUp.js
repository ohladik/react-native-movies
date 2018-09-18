import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');

class ButtonUp extends Component {

  render() {
    const {
      buttonUp
    } = styles;

    return (
        <View style={buttonUp}>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-up" color="lightgrey" size={50} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = {
  buttonUp: {
    alignItems: 'center',
    height: height * 0.1
  }
};

export default ButtonUp;
