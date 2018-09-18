import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');

class MovieOverview extends Component {

  render() {
    const {
      movieOverview,
      movieTitle,
      moviePlot,
      ratingContainer
     } = styles;

     const { title, plot } = this.props;

    return (
        <View style={movieOverview}>
            <Text style={movieTitle}>{title}</Text>
            <Text style={moviePlot}>{plot}</Text>
            <View style={ratingContainer}>
                <Icon name="star" color="#FFB500" size={20} />
                <Icon name="star" color="#FFB500" size={20} />
                <Icon name="star" color="#FFB500" size={20} />
                <Icon name="star" color="#FFB500" size={20} />
                <Icon name="star-border" color="#fff" size={20} />
            </View>
        </View>
    );
  }
}

const styles = {
  movieOverview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: height * 0.05
  },
  movieTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500'
  },
  moviePlot: {
    color: '#fff',
    fontSize: 12
  },
  ratingContainer: {
    flexDirection: 'row'
  }
};

export default MovieOverview;
