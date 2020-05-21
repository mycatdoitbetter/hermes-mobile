import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import Packs from './pages/Packs';
import Problems from './pages/Problems';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ReportProblem from './pages/ReportProblem';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const headerConfig = (title) => ({
  title,
  headerStyle: {
    elevation: 0,
    backgroundColor: '#4BAF4F',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
});

const iconTabConfig = (label, iconName) => ({
  tabBarLabel: label,
  tabBarIcon: ({ color }) => <Icon name={iconName} color={color} size={28} />,
});

const tabConfig = () => ({
  activeTintColor: '#314E5E',
  inactiveTintColor: '#F3F9E3',
  labelStyle: { fontSize: 14, fontWeight: '700' },
  style: { backgroundColor: '#4BAF4F', borderTopColor: '#4BAF4F' },
});

export function PackStack() {
  return (
    <Stack.Navigator initialRouteName="Packs">
      <Stack.Screen
        name="Report"
        component={ReportProblem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Packs"
        component={Packs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={headerConfig('Esqueceu sua senha?')}
      />
    </Stack.Navigator>
  );
}

export function DeliverymanTabs() {
  return (
    <Tab.Navigator tabBarOptions={tabConfig()}>
      <Tab.Screen
        name="Packs"
        component={PackStack}
        options={iconTabConfig('Entregas', 'package')}
      />
      <Tab.Screen
        name="Problems"
        component={Problems}
        options={iconTabConfig('Problemas', 'frown')}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={iconTabConfig('Perfil', 'user')}
      />
      {/* <Stack.Screen
        name="Report"
        component={ReportProblem}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  );
}
