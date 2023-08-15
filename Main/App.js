import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './navigator/Navigator';
import { CountProvider } from './screens/CountContext';



const App = () => {
  return (
    <CountProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </CountProvider>
  );
};

export default App;

