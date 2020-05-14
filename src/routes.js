import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Packs from './pages/Packs';
import Problems from './pages/Problems';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export function DeliverymanTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Packs" component={Packs} />
      <Tab.Screen name="Problems" component={Problems} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
