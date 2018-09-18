import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ButtonBack from './ButtonBack';
import MovieOverview from './MovieOverview';
import SeatsSelection from './SeatsSelection';
import VisitorsChart from './VisitorsChart';
import ControlButton from './ControlButton';

const { height } = Dimensions.get('window');
const { currentHeight } = StatusBar;
const viewHeight = (height * 0.92) - currentHeight;

const visitorData = [
  [{ time: 1480550400, visitors: 1234 },
  { time: 1480636800, visitors: 943 },
  { time: 1480723200, visitors: 768 },
  { time: 1480809600, visitors: 1353 },
  { time: 1480896000, visitors: 1675 },
  { time: 1480982400, visitors: 2287 },
  { time: 1481068800, visitors: 1892 }],
  [{ time: 1481155200, visitors: 133 },
  { time: 1481241600, visitors: 254 },
  { time: 1481328000, visitors: 768 },
  { time: 1481414400, visitors: 345 },
  { time: 1481500800, visitors: 564 },
  { time: 1481587200, visitors: 765 },
  { time: 1481673600, visitors: 967 }],
  [{ time: 1481760000, visitors: 123 },
  { time: 1481846400, visitors: 234 },
  { time: 1481932800, visitors: 345 },
  { time: 1482019200, visitors: 453 },
  { time: 1482105600, visitors: 318 },
  { time: 1482192000, visitors: 643 },
  { time: 1482278400, visitors: 876 }],
  [{ time: 1482364800, visitors: 3332 },
  { time: 1482451200, visitors: 1212 },
  { time: 1482537600, visitors: 3732 },
  { time: 1482624000, visitors: 6421 },
  { time: 1482710400, visitors: 3464 },
  { time: 1482796800, visitors: 2325 },
  { time: 1482883200, visitors: 1892 }],
];

class MovieDetail extends Component {
  constructor() {
   super();
   this.state = {
     currentWeek: 0,
    };

   this.previousWeek = this.previousWeek.bind(this);
   this.nextWeek = this.nextWeek.bind(this);
  }

  previousWeek() {
    if (this.state.currentWeek !== 0) {
      this.setState({ currentWeek: this.state.currentWeek - 1 });
    }
  }

  nextWeek() {
    if (this.state.currentWeek < visitorData.length - 1) {
      this.setState({ currentWeek: this.state.currentWeek + 1 });
    }
  }

  render() {
    const graphProps = {};
    graphProps.data = visitorData[this.state.currentWeek];
    graphProps.xAccessor = (d) => new Date(d.time * 1000);
    graphProps.yAccessor = (d) => d.visitors;

    const {
      viewContainer,
      movieDetailContainer,
      movieDetailContainerChart,
      button,
      chartWrapper,
      chartHeader,
      attendanceContainer,
      buttonContainer,
     } = styles;

     let _scrollView: ScrollView;

    return (
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        <View style={movieDetailContainer}>

          <Image source={{ uri: this.props.image }} style={viewContainer}>
            <ButtonBack />
            <MovieOverview
              title="ASSASIN'S CREED"
              plot="When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society."
            />
            <TouchableOpacity
              style={button}
              onPress={() => { _scrollView.scrollTo({ y: viewHeight }); }}
            >
              <Icon name="keyboard-arrow-down" color="#fff" size={50} />
            </TouchableOpacity>
          </Image>
        </View>
        <View style={movieDetailContainerChart}>
          <TouchableOpacity
            style={button}
            onPress={() => { _scrollView.scrollTo({ y: 0 }); }}
          >
            <Icon name="keyboard-arrow-up" color="lightgrey" size={50} />
          </TouchableOpacity>
          <View style={attendanceContainer}>
            <Text style={chartHeader}>Attendance</Text>
            <View style={chartWrapper}>
              <VisitorsChart {...graphProps} />
            </View>
            <View style={buttonContainer}>
              <ControlButton active onPress={this.previousWeek}>
                 Previous week
               </ControlButton>
               <ControlButton active onPress={this.nextWeek}>
                 Next week
               </ControlButton>
             </View>
          </View>
          <TouchableOpacity
            style={button}
            onPress={() => { _scrollView.scrollTo({ y: 2 * viewHeight }); }}
          >
            <Icon name="keyboard-arrow-down" color="lightgrey" size={50} />
          </TouchableOpacity>
        </View>
        <View style={movieDetailContainer}>
          <TouchableOpacity
            style={button}
            onPress={() => { _scrollView.scrollTo({ y: viewHeight }); }}
          >
            <Icon name="keyboard-arrow-up" color="lightgrey" size={50} />
          </TouchableOpacity>
          <SeatsSelection />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  },
  movieDetailContainer: {
    height: viewHeight
  },
  movieDetailContainerChart: {
    height: viewHeight,
    backgroundColor: '#2a3945',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'center'
  },
  attendanceContainer: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chartWrapper: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chartHeader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
};

export default MovieDetail;
