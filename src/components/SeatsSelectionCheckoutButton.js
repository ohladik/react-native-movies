import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class SeatsSelectionCheckoutButton extends Component {

  render() {
    const {
      viewContainer,
      buttonContainer,
      whiteText
    } = styles;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={viewContainer}
      >
        <View style={buttonContainer}>

          <Text style={whiteText}>
            CHECKOUT
          </Text>

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  },
  buttonContainer: {
    width: 200,
    height: 75,
    backgroundColor: '#1e1f23',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText: {
    color: '#fff'
  }
};

export default SeatsSelectionCheckoutButton;
