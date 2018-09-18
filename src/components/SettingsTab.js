import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


class SettingsTab extends Component {

  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 50,
    backgroundColor: '#121315',
    alignItems: 'center'
  }
};

export default SettingsTab;
