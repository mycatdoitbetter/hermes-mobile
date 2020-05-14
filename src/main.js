import 'react-native-gesture-handler';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { DeliverymanTabs } from './routes';
import Login from './pages/Login';

// const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Login />
    {/* <DeliverymanTabs /> */}
  </NavigationContainer>
);
