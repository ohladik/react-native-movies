import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import SeatsSelectionCheckoutButton from './SeatsSelectionCheckoutButton';

class SeatsSelectionBottomSection extends Component {

  render() {
    const {
      viewContainer,
      separator,
      sectionWrapper,
      priceContainer,
      buttonContainer,
      whiteText,
      totalText
    } = styles;

    return (
      <View style={viewContainer}>
        <View style={separator} />
        <View style={sectionWrapper}>
          <View style={priceContainer}>
            <Text style={totalText}>
              Total
            </Text>
            <Text style={whiteText}>
              $56.90
            </Text>
          </View>
        </View>
        <View style={buttonContainer}>
          <SeatsSelectionCheckoutButton />
        </View>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  },
  separator: {
    flex: 1
  },
  sectionWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#313131'
  },
  priceContainer: {
    flexDirection: 'column',
    padding: 5
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  whiteText: {
    color: '#fff'
  },
  totalText: {
    color: '#858585'
  }
};

export default SeatsSelectionBottomSection;
