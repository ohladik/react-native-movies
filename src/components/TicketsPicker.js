import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Picker
} from 'react-native';

const { width, height } = Dimensions.get('window');

class TicketsPicker extends Component {

  render() {
    const {
      viewContainer
    } = styles;

    return (
      <View style={viewContainer}>
        <Picker prompt="Cinema">
          <Picker.Item label="Bio Oko" value="oko" />
          <Picker.Item label="Kino Aero" value="aero" />
        </Picker>
        <Picker prompt="Format">
          <Picker.Item label="IMAX" value="imax" />
          <Picker.Item label="3D" value="3d" />
          <Picker.Item label="2D" value="2d" />
        </Picker>
        <Picker prompt="Date">
          <Picker.Item label="Today" value="today" />
          <Picker.Item label="Tomorrow" value="tomorrow" />
        </Picker>
      </View>
    );
  }
}

const styles = {
  viewContainer: {

  }
};

export default TicketsPicker;
