import React, {
  Component,
} from 'react';
import {
  ART,
  View,
  Text,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import * as scale from 'd3-scale';

const d3 = {
  scale,
};

const {
  Group,
  Shape,
  Surface,
  Path,
} = ART;

const AnimatedShape = Animated.createAnimatedComponent(Shape);

const { width, height } = Dimensions.get('window');

const ratingsArray = [
  'A Terrible movie',
  'Had some light moments',
  'Average movie',
  'I really liked it',
  'Outstanding'
];


class MovieRating extends Component {
  constructor() {
   super();
   this.state = {
     panValueY: new Animated.Value(0),
     rating: 0,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {
         dy: this.state.panValueY,
       }]),
    });
  }

  createScale(minInput, maxInput, minOutput, maxOutput) {
    return d3.scale.scaleLinear()
      .domain([minInput, maxInput])
      .range([minOutput, maxOutput]);
  }

  scaleTest = this.createScale(0, 50, 2.5, 0);

  // return value beween 0 - 5
  transformPositionToRating(value) {
    if (value === 0) {
      return 2.5;
    } else if (value < 0 && value > -50) {
      return ((50 - value) / 20).toFixed(1);
    } else if (value <= -50) {
      return 5;
    } else if (value > 0 && value < 50) {
      return this.scaleTest(value).toFixed(1);
    } else if (value >= 50) {
      return 0;
    }
  }

  render() {
    // circle
    const radius = 120;
    const circlePath = Path().moveTo(0, -radius)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)
      .close();

    // smile curve - no idea how to define to get needed shape
    // hardcoded path below
    // const smileCurve = Path()
    //   .curve(-50, 50, -20, 20, 20, 20, 50, 50);

    const smileCurveNegative = 'M-50,50 C-20,20 20,20 50,50';
    const smileCurvePositive = 'M-50,50 C-20,80 20,80 50,50';

    // path of smile curve
    // inverted to swipe direction
    const smilePath = this.state.panValueY.interpolate({
      inputRange: [-50, 50],
      outputRange: [smileCurvePositive, smileCurveNegative],
      extrapolate: 'clamp'
    });

    // color of the face
    // inverted to swipe direction
    const smileColor = this.state.panValueY.interpolate({
      inputRange: [-50, 0, 50],
      outputRange: ['#18bd9c', '#1a8be2', '#e95356'],
      extrapolate: 'clamp'
    });

    // couldn't display it in Text element, fixed by attaching event listener and setState
    // const ratingNumber = this.state.panValueY.interpolate({
    //   inputRange: [-50, 0, 50],
    //   outputRange: [0, 2.5, 5],
    // });

    // TODO remove listener when component unmounts
    this.state.panValueY.addListener(({ value }) => this.setState({ rating: value }));

    const {
      container,
      topTextContainer,
      ratingNumberStyleDynamic,
      ratingNumberStyleTop,
      ratingText,
      ratingHint,
    } = styles;

      return (
        <View style={container} {...this._panResponder.panHandlers}>
          <View style={topTextContainer}>
            <Animated.Text
              style={ratingNumberStyleDynamic}
            >
              {this.transformPositionToRating(this.state.rating)}
            </Animated.Text>
            <Text style={ratingNumberStyleTop}>/5</Text>
          </View>
          <Text
            style={ratingText}
          >
            {ratingsArray[this.transformPositionToRating(this.state.rating) < 0.1 ? 0 : Math.ceil(this.transformPositionToRating(this.state.rating)) - 1]}
          </Text>
          <Animated.View>
            <Surface width={width * 0.9} height={height * 0.5}>
              <Group x={radius + 50} y={radius + 50}>
                <AnimatedShape
                  d={circlePath}
                  stroke={smileColor}
                  strokeWidth={8}
                />
                <AnimatedShape
                  d={smilePath}
                  stroke={smileColor}
                  strokeWidth={8}
                />
              </Group>
            </Surface>
          </Animated.View>
          <Text style={ratingHint}>Drag up and down to rate</Text>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingNumberStyleDynamic: {
    fontSize: 35,
    color: '#000',
  },
  ratingNumberStyleTop: {
    fontSize: 35,
    color: 'grey',
  },
  ratingText: {
    fontSize: 17,
  },
  ratingHint: {
    fontSize: 17,
  }
};

export default MovieRating;
