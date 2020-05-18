import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DeliverymanTabs, LoginStack } from './routes';

export default ({ signed }) => {
  return (
    <NavigationContainer>
      {signed ? <DeliverymanTabs /> : <LoginStack />}
    </NavigationContainer>
  );
};
