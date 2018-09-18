import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import SeatsMap from './SeatsMap';

const seats = [
  { seatID: 1, status: 'Available' },
  { seatID: 2, status: 'Taken' },
  { seatID: 3, status: 'Taken' },
  { seatID: 4, status: 'Available' },
  { seatID: 5, status: 'Available' },
  { seatID: 6, status: 'Available' },
  { seatID: 7, status: 'Available' },
  { seatID: 8, status: 'Taken' },
  { seatID: 9, status: 'Taken' },
  { seatID: 10, status: 'Taken' },
  { seatID: 11, status: 'Available' },
  { seatID: 12, status: 'Available' },
  { seatID: 13, status: 'Available' },
  { seatID: 14, status: 'Available' },
  { seatID: 15, status: 'Available' },
  { seatID: 16, status: 'Available' },
  { seatID: 17, status: 'Available' },
  { seatID: 18, status: 'Available' },
  { seatID: 19, status: 'Available' },
  { seatID: 20, status: 'Available' },
  { seatID: 21, status: 'Available' },
  { seatID: 22, status: 'Available' },
  { seatID: 23, status: 'Available' },
  { seatID: 24, status: 'Available' },
  { seatID: 25, status: 'Available' },
  { seatID: 26, status: 'Available' },
  { seatID: 27, status: 'Available' },
  { seatID: 28, status: 'Available' },
  { seatID: 29, status: 'Available' },
  { seatID: 30, status: 'Available' },
  { seatID: 31, status: 'Available' },
  { seatID: 32, status: 'Available' },
  { seatID: 33, status: 'Available' },
  { seatID: 34, status: 'Available' },
  { seatID: 35, status: 'Available' },
  { seatID: 36, status: 'Available' },
  { seatID: 37, status: 'Available' },
  { seatID: 38, status: 'Available' },
  { seatID: 39, status: 'Available' },
  { seatID: 40, status: 'Available' },
  { seatID: 41, status: 'Available' },
  { seatID: 42, status: 'Available' }
        ];

class SeatsSelector extends Component {

  render() {
    const {
      viewContainer,
      seatsLegend,
      legendWrapper,
      seatAvailable,
      seatTaken
    } = styles;

    return (
      <View style={viewContainer}>
        <View style={seatsLegend}>
          <View style={legendWrapper}>
            <View style={seatAvailable} />
            <Text>Available</Text>
          </View>
          <View style={legendWrapper}>
            <View style={seatTaken} />
            <Text>Taken</Text>
          </View>
        </View>
        <SeatsMap seats={seats} />
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  seatsLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  legendWrapper: {
    flexDirection: 'row'
  },
  seatAvailable: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#CCCCCC'
  },
  seatTaken: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#808080'
  }
};

export default SeatsSelector;
