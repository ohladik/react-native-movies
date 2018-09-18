import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class FullCard extends Component {

  render() {
    const { fullCard,
            fullCardTitle,
            fullCardSubTitle,
            fullCardFooter,
            headerContainer,
            centerContainer,
            footerContainer
          } = styles;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Actions.moviedetail()}
      >
        <Image source={{ uri: this.props.image }}>
          <View style={fullCard}>
            <View style={headerContainer}>
              <Text style={fullCardTitle}>{this.props.title}</Text>
            </View>
            <View style={centerContainer}>
              <Text style={fullCardSubTitle}>FORMATS</Text>
              <Text style={fullCardTitle}>{this.props.formats}</Text>
            </View>
            <View style={footerContainer}>
            <Text style={fullCardSubTitle}>TICKETS FROM</Text>
            <Text style={fullCardFooter}>{this.props.price}</Text>
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
    fontSize: 18,
    fontWeight: '400'
  },
  fullCardSubTitle: {
    color: '#fff',
    fontSize: 10
  },
  fullCardFooter: {
    color: '#fff',
    fontSize: 15
  },
  headerContainer: {
    alignItems: 'center'
  },
  centerContainer: {
    alignItems: 'center'
  },
  footerContainer: {
    alignItems: 'center'
  }
};

export default FullCard;
