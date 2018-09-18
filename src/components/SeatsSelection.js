import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StatusBar
} from 'react-native';

import TicketsPicker from './TicketsPicker';
import SeatsSelector from './SeatsSelector';
import SeatsSelectionBottomSection from './SeatsSelectionBottomSection';

const { width, height } = Dimensions.get('window');
const { currentHeight } = StatusBar;
// consider hehight of statusbar on android and height of arrow icon in parent
const viewHeight = (height * 0.92) - currentHeight - 50;

class SeatsSelection extends Component {

  render() {
    const {
      viewContainer,
      orderContainer
    } = styles;

    return (
      <View style={viewContainer}>
        <View style={orderContainer}>
          <TicketsPicker />
          <SeatsSelector />
        </View>
        <SeatsSelectionBottomSection />
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    height: viewHeight,
    flexDirection: 'column'
  },
  orderContainer: {
    height: height * 0.6,
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#EBEBEB',
    justifyContent: 'space-between'
  }
};

export default SeatsSelection;
