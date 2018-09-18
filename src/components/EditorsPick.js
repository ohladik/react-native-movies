import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class EditorsPick extends Component {

  render() {
    const { fullCard,
            fullCardTitle,
            fullCardSubTitle,
            fullCardFooter,
            headerContainer,
            footerContainer
          } = styles;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Actions.moviedetail()}
      >
        <Image source={{ uri: 'https://i.imgur.com/4MemQef.png' }}>
          <View style={fullCard}>
            <View style={headerContainer}>
              <Text style={fullCardTitle}>ASSASSIN'S CREED</Text>
              <Text style={fullCardSubTitle}>TICKETS FROM 3$</Text>
            </View>
            <View style={footerContainer}>
              <Text style={fullCardFooter}>EDITORS PICK</Text>
            </View>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

const styles = {
  fullCard: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  fullCardTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500'
  },
  fullCardSubTitle: {
    color: '#fff',
    fontSize: 10
  },
  fullCardFooter: {
    color: '#fff',
    fontSize: 15,
  },
  headerContainer: {
    alignItems: 'center'
  }
};

export default EditorsPick;
