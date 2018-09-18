import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NowPlayingHeader extends Component {

  render() {
    const { headerContainer, headerText } = styles;

    return (
      <View style={headerContainer}>
        <Text style={headerText}>
          NOW IN THEATERS
        </Text>
      </View>
    );
  }
}

const styles = {
  headerContainer: {
    backgroundColor: '#1c1c1e',
    height: 40,
    justifyContent: 'flex-end'
  },
  headerText: {
    padding: 10,
    color: 'lightgrey',
    fontSize: 12
  }
};

export default NowPlayingHeader;
