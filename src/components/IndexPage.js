import React, { Component } from 'react';
import {
  Dimensions,
  StatusBar,
  Platform
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import HomeTab from './HomeTab';
import TicketsTab from './TicketsTab';
import SettingsTab from './SettingsTab';
import CinemasTab from './CinemasTab';
import CinemaDetail from './CinemaDetail';
import MovieRating from './MovieRating';
import HorizontalParallax from './HorizontalParallax';
import LoginScreen from './LoginScreen';

import MovieDetail from './MovieDetail';
import TicketDetail from './TicketDetail';
import HomeTabIcon from './HomeTabIcon';
import MyTicketsTabIcon from './MyTicketsTabIcon';
import SettingsTabIcon from './SettingsTabIcon';
import CinemasTabIcon from './CinemasTabIcon';

const { height } = Dimensions.get('window');

class IndexPage extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#1c1c1e', true);
    }
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    const {
      tabBarStyle,
      sceneStyle,
      appContainerStyle,
      ticketsNavigationBarStyle,
      ticketsNavigationBarTitleStyle,
     } = styles;
    return (
      <Router>
        <Scene
          component={LoginScreen}
          key="login"
          initial
          hideNavBar
        />
        <Scene
          tabs
          key="home"
          tabBarStyle={tabBarStyle}
          sceneStyle={appContainerStyle}
        >
          <Scene
            key="hometab"
            hideNavBar
            title="Home"
            icon={HomeTabIcon}
            sceneStyle={sceneStyle}
          >
            <Scene
              component={HomeTab}
              key="movies"
              hideNavBar
              icon={HomeTabIcon}
              sceneStyle={sceneStyle}
            />
            <Scene
              component={MovieDetail}
              key="moviedetail"
              image="https://cdn.vox-cdn.com/thumbor/WKLX_xfkBokFUfWnfr2cflw2djA=/0x0:2864x1200/920x613/filters:focal(982x303:1440x761):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57044477/blade3.0.jpg"
              hideNavBar
              title="Movie detail"
              sceneStyle={sceneStyle}
            />
          </Scene>
          <Scene
            key="ticketstab"
            title="My Tickets"
            icon={MyTicketsTabIcon}
            sceneStyle={sceneStyle}
          >
            <Scene
              component={TicketsTab}
              key="tickets"
              title="My Tickets"
              icon={HomeTabIcon}
              sceneStyle={sceneStyle}
              navigationBarStyle={ticketsNavigationBarStyle}
              titleStyle={ticketsNavigationBarTitleStyle}
            />
            <Scene
              component={TicketDetail}
              key="ticketdetail"
              title="Ticket Detail"
              onRight={() => Actions.movierating({ type: 'push' })}
              rightTitle="Rate"
              icon={HomeTabIcon}
              sceneStyle={sceneStyle}
              navigationBarStyle={ticketsNavigationBarStyle}
              titleStyle={ticketsNavigationBarTitleStyle}
            />
            <Scene
              hideNavBar
              hideTabBar
              component={MovieRating}
              key="movierating"
              icon={HomeTabIcon}
              sceneStyle={sceneStyle}
              navigationBarStyle={ticketsNavigationBarStyle}
              titleStyle={ticketsNavigationBarTitleStyle}
            />
          </Scene>
          <Scene
            key="cinemastab"
            title="Cinemas"
            icon={CinemasTabIcon}
            sceneStyle={sceneStyle}
          >
            <Scene
              component={CinemasTab}
              key="cinemas"
              hideNavBar
              title="Cinemas"
              icon={CinemasTabIcon}
              sceneStyle={sceneStyle}
            />
            <Scene
              component={CinemaDetail}
              key="cinemadetail"
              hideNavBar
              title="Cinema Detail"
              icon={CinemasTabIcon}
              sceneStyle={sceneStyle}
            />
          </Scene>
          <Scene
            component={HorizontalParallax}
            key="settings"
            hideNavBar
            title="Settings"
            icon={SettingsTabIcon}
            sceneStyle={sceneStyle}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  tabBarStyle: {
    backgroundColor: '#232227',
    opacity: 1,
    height: height * 0.08
  },
  sceneStyle: {
    marginBottom: height * 0.08
  },
  appContainerStyle: {
    backgroundColor: '#373B46'
  },
  ticketsNavigationBarStyle: {
    backgroundColor: '#1c1c1e',
    borderBottomWidth: 0
  },
  ticketsNavigationBarTitleStyle: {
    color: '#fff'
  },
};

export default IndexPage;
