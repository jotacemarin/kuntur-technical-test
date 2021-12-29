import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Components for navigation in app
import { StackNavigator } from 'react-navigation';

import PlayerList from './src/components/PlayerList'
import PlayerView from './src/components/PlayerView'

export default StackNavigator(
  {
    PlayersList: { screen: PlayerList },
    PlayerView: { screen: PlayerView }
  },
  {
    navigationOptions: {
      //
    }
  }
);

