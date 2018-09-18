import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

class NewTicket extends Component {

  render() {
    const {
      containerStyle,
      movieDetail,
      movieDate,
      iconContainer,
      timeContainer,
      dateContainer,
      cinemaRow,
      movieRow
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={movieDetail}>
          <View style={movieRow}>
            <Text>Assassin's Creed</Text>
          </View>
          <View style={cinemaRow}>
            <Text>Bio OKO</Text>
            <Text>Kamenicka 42</Text>
          </View>
        </View>
        <View style={movieDate}>
          <View style={iconContainer}>
            <Icon name="access-time" color="#000" size={70} />
          </View>
          <View style={timeContainer}>
            <Text>18:25</Text>
          </View>
          <View style={dateContainer}>
            <Text>Jul 12, 2017</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    width: width * 0.9,
    height: height * 0.25,
    margin: 20
  },
  movieDetail: {
    flex: 2,
    marginRight: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  movieDate: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    flex: 2
  },
  timeContainer: {
    flex: 1
  },
  dateContainer: {
    flex: 1
  },
  cinemaRow: {
    flex: 1,
    alignItems: 'center'
  },
  movieRow: {
    flex: 1,
    justifyContent: 'center'
  }
};

export default NewTicket;
