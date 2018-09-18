import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

class CinemaCard extends Component {

  render() {
    const {
      containerStyle,
      cinemaName,
      ratingContainer,
      ratingStarsContainer
    } = styles;

    return (
      <View style={containerStyle}>
        <Text style={cinemaName}>
          {this.props.name}
        </Text>
        <View style={ratingContainer}>
          <View style={ratingStarsContainer}>
              <Icon name="star" color="#FFB500" size={20} />
              <Icon name="star" color="#FFB500" size={20} />
              <Icon name="star" color="#FFB500" size={20} />
              <Icon name="star" color="#FFB500" size={20} />
              <Icon name="star-border" color="#FFB500" size={20} />
          </View>
          <Text>
             {this.props.rating} - ‎{this.props.reviews} reviews
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: height * 0.22,
    margin: width * 0.05,
    borderRadius: width * 0.01,
    backgroundColor: '#fff',
    elevation: 3
  },
  cinemaName: {
    fontSize: 25
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingStarsContainer: {
    flexDirection: 'row'
  }
};

export default CinemaCard;
