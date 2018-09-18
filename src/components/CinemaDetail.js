import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import MovieReview from './MovieReview';

const { width } = Dimensions.get('window');

const reviews = [
  {
    id: 1,
    avatarURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
    name: 'John Frusciante',
    rating: '4.5/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
  {
    id: 2,
    avatarURL: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png',
    name: 'Jane Austen',
    rating: '4/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
  {
    id: 3,
    avatarURL: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png',
    name: 'Walter White',
    rating: '3.5/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
  {
    id: 4,
    avatarURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
    name: 'Madelaine Smith',
    rating: '2.5/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
  {
    id: 5,
    avatarURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png',
    name: 'Kate DeWitt',
    rating: '1.5/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
  {
    id: 6,
    avatarURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png',
    name: 'Will Byers',
    rating: '5/5',
    reviewText: 'This movie was very good. I really liked it you know. Really awesome man.'
  },
];


class CinemaDetail extends Component {
  constructor() {
   super();
   this.state = {
     scrollY: new Animated.Value(0),
     selectedReviewID: undefined,
    };
  }

  render() {
    // Animation
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT - NAVBAR_HEIGHT],
      outputRange: [1, 0],
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 100],
    });
    const imageScale = this.state.scrollY.interpolate({
      inputRange: [-100, 0, 100],
      outputRange: [2.5, 1, 1],
      extrapolate: 'clamp',
    });
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [-1, -200],
    });
    const navBarBackgroundOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT - NAVBAR_HEIGHT - 1, HEADER_HEIGHT - NAVBAR_HEIGHT],
      outputRange: [0, 0, 1],
    });
    const titleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 160, 190],
      outputRange: [0, 0, 1],
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [-1, 0, 160, 190, 191],
      outputRange: [20, 20, 20, 0, 0],
      extrapolate: 'clamp',
    });

    const {
      openingHoursCard,
      cinemaDescription,
      cinemaDetailContainer,
      reviewsContainer,
      cardHeader,
      openingHoursCardLeftColumn,
      openingHoursCardRightColumn,
    } = styles;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Platform.OS === 'android' ? 24 : 26, position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'black' }} />
        <View style={[styles.fill, { overflow: 'hidden' }]}>
          <Animated.ScrollView
            scrollEventThrottle={16}
            style={styles.fill}
            contentContainerStyle={styles.content}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { useNativeDriver: true }
            )}
          >
            <Text style={styles.name}>Bio Oko</Text>
            <View>
              <View style={cinemaDetailContainer}>
                <Text style={cinemaDescription}>
                  Kino Oko (též bio Oko) v Praze je jednosálové kino z roku 1940 v ulici Františka Křížka v Holešovicích. Je jedním z dosud zachovaných a provozovaných kinosálů z doby před rokem 1990 a od roku 2007 se zaměřuje na netradiční a artovou produkci.
                </Text>
                <Text style={cardHeader}>Opening hours:</Text>
                <View style={openingHoursCard}>
                  <View style={openingHoursCardLeftColumn}>
                    <Text>Monday</Text>
                    <Text>Tuesday</Text>
                    <Text>Wednesday</Text>
                    <Text>Thursday</Text>
                    <Text>Friday</Text>
                    <Text>Saturday</Text>
                    <Text>Sunday</Text>
                  </View>
                  <View style={openingHoursCardRightColumn}>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                    <Text>08:00 - 23:00</Text>
                  </View>
                </View>
              </View>
              <View style={reviewsContainer}>
                <Text>Reviews</Text>
                {
                  reviews.map((row) =>
                    <TouchableOpacity
                      key={row.id}
                      onPress={() => this.setState({ selectedReviewID: row.id })}
                      activeOpacity={0.7}
                    >
                      <MovieReview
                        id={row.id}
                        selectedReviewID={this.state.selectedReviewID}
                        avatarURL={row.avatarURL}
                        name={row.name}
                        rating={row.rating}
                        reviewText={row.reviewText}
                      />
                    </TouchableOpacity>
                    )
                }
              </View>
          </View>
          </Animated.ScrollView>

          <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]} pointerEvents="none">
            <Animated.Image
              style={[styles.image, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }, { scale: imageScale }] }]}
              resizeMode="cover"
              source={{ uri: 'http://www.tyden.cz/obrazek/201603/56fb60e69b351/crop-965900-biooko.jpg' }}
            />
          </Animated.View>

          <View style={styles.navbar}>
            <Animated.View style={[styles.navbarBackground, { opacity: navBarBackgroundOpacity }]} />

            <View style={[StyleSheet.absoluteFill, { flexDirection: 'row', alignItems: 'center' }]}>
              <TouchableOpacity onPress={() => Actions.cinemas({ type: 'back' })} hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                <Image
                  style={styles.backButton}
                  source={{ uri: 'https://www.android.com/static/img/map/back-arrow.png' }}
                />
              </TouchableOpacity>

              <Animated.View pointerEvents="none" style={[styles.titleContainer, { opacity: titleOpacity, transform: [{ translateY: titleTranslate }] }]}>
                <Text style={styles.title}>
                  Bio Oko
                </Text>
              </Animated.View>

              <View style={styles.rightButton} />
            </View>
          </View>
        </View>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const HEADER_HEIGHT = 150;
const NAVBAR_HEIGHT = 56;

const styles = StyleSheet.create({
  row: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eee',
  },
  fill: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 0 : 26,
  },
  image: {
    height: HEADER_HEIGHT,
  },
  header: {
    overflow: 'hidden',
    position: 'absolute',
    top: -HEADER_HEIGHT - HEADER_HEIGHT,
    left: 0,
    right: 0,
    backgroundColor: '#1c1c1e',
    height: HEADER_HEIGHT + HEADER_HEIGHT + HEADER_HEIGHT,
    paddingTop: HEADER_HEIGHT + HEADER_HEIGHT,
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NAVBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarBackground: {
    backgroundColor: '#1c1c1e',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  content: {
    backgroundColor: '#fff',
    paddingTop: HEADER_HEIGHT,
  },
  name: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    width: 20,
    height: 20,
    marginLeft: 16,
    tintColor: 'white',
  },
  rightButton: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  cinemaDetailContainer: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#edeff5'
  },
  reviewsContainer: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Content: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#edeff5'
  },
  openingHoursCard: {
    width: width * 0.9,
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  openingHoursCardLeftColumn: {
    flex: 2,
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#fbfbfb'
  },
  openingHoursCardRightColumn: {
    flex: 3,
    alignItems: 'center',
    padding: 5,
  },
  cinemaDescription: {
    padding: 5,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: '400',
  },
});


export default CinemaDetail;
