import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
//import { Actions } from 'react-native-router-flux';

import EditorsPick from './EditorsPick';
import NowPlayingHeader from './NowPlayingHeader';
import HalfCard from './HalfCard';
import FullCard from './FullCard';

class HomeTab extends Component {

  render() {
    const { tabContainer,
            rowContainer
          } = styles;

    return (
      <ScrollView style={tabContainer}>
        <EditorsPick />
        <NowPlayingHeader />
        <View style={rowContainer}>
          <HalfCard
            title="ARRIVAL"
            formats="2D"
            price="3$"
            image="http://elcondensadordefluzo.blogs.fotogramas.es/files/2016/08/another-arrival-trailer-coming-tomorrow.jpg"
          />
          <HalfCard
            title="LEGO BATMAN"
            formats="IMAX, 3D, 2D"
            price="3$"
            image="http://www.gannett-cdn.com/-mm-/57749700872034a321f59a502347695b377b6f95/c=249-0-2152-1075&r=x329&c=580x326/local/-/media/2016/03/23/USATODAY/USATODAY/635943680153874173-LGB-TRL-BC-0024.jpg"
          />
        </View>
        <FullCard
          title="JOHN WICK 2"
          formats="IMAX, 3D, 2D"
          price="4$"
          image="https://i.ytimg.com/vi/WDFubOaxxvI/maxresdefault.jpg"
        />
        <View style={rowContainer}>
          <HalfCard
            title="PASSENGERS"
            formats="IMAX, 3D, 2D"
            price="6$"
            image="http://static.srcdn.com/wp-content/uploads/2016/08/passengers-movie-2016-images-pratt-lawrence.jpg"
          />
          <HalfCard
            title="DUNKIRK"
            formats="IMAX, 3D, 2D"
            price="7$"
            image="http://static6.businessinsider.com/image/57a3c080db5ce91c008b4e14-1190-625/christopher-nolans-epic-new-world-war-ii-movie-dunkirk-has-a-teaser.jpg"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  tabContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1
  }
};

export default HomeTab;
