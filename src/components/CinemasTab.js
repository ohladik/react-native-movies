import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
 } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

import CinemaCard from './CinemaCard';

const cinemas = [
  {
    id: 1,
    name: 'Bio Oko',
    description: 'bio oko description',
    rating: 4.5,
    reviews: 189,
    latitude: 50.100161,
    longitude: 14.430005
  },
  {
    id: 2,
    name: 'Kino Svetozor',
    description: 'svetozor description',
    rating: 4.3,
    reviews: 145,
    latitude: 50.081836,
    longitude: 14.425280
  },
  {
    id: 3,
    name: 'Kino Aero',
    description: 'aero description',
    rating: 4.4,
    reviews: 164,
    latitude: 50.090176,
    longitude: 14.471911
  },
  {
    id: 4,
    name: 'Kino Lucerna',
    description: 'lucerna description',
    rating: 4.1,
    reviews: 256,
    latitude: 50.081367,
    longitude: 14.425402
  },
  {
    id: 5,
    name: 'IMAX Cinema City',
    description: 'bio oko description',
    rating: 4.8,
    reviews: 564,
    latitude: 50.078830,
    longitude: 14.461108
  },
  {
    id: 6,
    name: 'Kino Atlas',
    description: 'atlas description',
    rating: 4.1,
    reviews: 123,
    latitude: 50.091461,
    longitude: 14.438473
  }
];

const { width, height } = Dimensions.get('window');


class CinemasTab extends Component {
  constructor() {
    super();
    this.state = {
      focusedCinema: 0,
     };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.animateToCoordinate = this.animateToCoordinate.bind(this);
 }

 animateToCoordinate(index) {
  this.map.animateToCoordinate({ latitude: cinemas[index].latitude, longitude: cinemas[index].longitude }, 500);
  }

 handlePageChange(e) {
    const offset = e.nativeEvent.contentOffset;
    if (offset) {
      const page = Math.round(offset.x / width);
      if (this.state.focusedCinemaID !== page) {
        this.setState({ focusedCinema: page });
        this.animateToCoordinate(page);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
           <MapView
             ref={ref => { this.map = ref; }}
             style={styles.map}
             initialRegion={{
              latitude: cinemas[0].latitude,
              longitude: cinemas[0].longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015,
            }}
           >

             {cinemas.map((row) =>
                   <MapView.Marker
                     key={row.id}
                     coordinate={{ latitude: row.latitude, longitude: row.longitude }}
                     title={row.name}
                     description={row.description}
                   />
            )}

          </MapView>
         </View>
         <ScrollView
           horizontal
           pagingEnabled
           showsHorizontalScrollIndicator={false}
           onMomentumScrollEnd={this.handlePageChange}
           contentContainerStyle={styles.cinemasContainer}
         >

           {cinemas.map((row) =>
             <TouchableOpacity
               key={row.id}
               activeOpacity={0.5}
               onPress={() => Actions.cinemadetail({ type: 'push' })}
             >
               <CinemaCard
                 name={row.name}
                 rating={row.rating}
                 reviews={row.reviews}
               />
             </TouchableOpacity>
           )}

         </ScrollView>
         <View style={styles.paginationContainer}>
           {cinemas.map((row, index) => <View key={index} style={index === this.state.focusedCinema ? styles.activeCircle : styles.inactiveCircle} />)}
         </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'column'
 },
 mapContainer: {
   height: 350,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 cinemasContainer: {
   backgroundColor: 'whitesmoke'
 },
 paginationContainer: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   height: height * 0.08,
   backgroundColor: 'whitesmoke'
 },
 activeCircle: {
   backgroundColor: 'grey',
   width: 10,
   height: 10,
   borderRadius: 5,
   margin: 3
 },
 inactiveCircle: {
   backgroundColor: 'lightgrey',
   width: 8,
   height: 8,
   borderRadius: 5,
   margin: 3
 }
});

export default CinemasTab;
