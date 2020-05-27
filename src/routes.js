import React, { useContext } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { ThemeContext } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import Packs from './pages/Packs';
import Problems from './pages/Problems';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ReportProblem from './pages/ReportProblem';
import Reports from './pages/Reports';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const headerConfig = (title, theme) => ({
  title,
  headerStyle: {
    elevation: 0,
    backgroundColor: theme.primary,
  },
  headerTintColor: theme.secondary,
  headerTitleAlign: 'center',
});

const iconTabConfig = (label, iconName) => ({
  tabBarLabel: label,
  tabBarIcon: ({ color }) => <Icon name={iconName} color={color} size={28} />,
});

const tabConfig = (theme) => ({
  activeTintColor: theme.tabBarOn,
  inactiveTintColor: theme.tabBarOff,
  labelStyle: { fontSize: 14, fontWeight: '700' },
  style: {
    backgroundColor: theme.primary,
    borderTopColor: theme.primary,
  },
});

export function PackStack() {
  const themeContext = useContext(ThemeContext);
  return (
    <Stack.Navigator initialRouteName="Packs">
      <Stack.Screen
        name="Packs"
        component={Packs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Report"
        component={ReportProblem}
        options={headerConfig('Relate o problema', themeContext)}
      />
    </Stack.Navigator>
  );
}
export function LoginStack() {
  const themeContext = useContext(ThemeContext);
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
        options={headerConfig('Esqueceu sua senha?', themeContext)}
      />
    </Stack.Navigator>
  );
}
export function ProblemStack() {
  const themeContext = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={headerConfig('Entenda o problema', themeContext)}
      />
    </Stack.Navigator>
  );
}

export function DeliverymanTabs() {
  const themeContext = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBarOptions={tabConfig(themeContext)}
      initialRouteName="Packs"
    >
      <Tab.Screen
        name="Packs"
        component={PackStack}
        options={iconTabConfig('Entregas', 'package')}
      />
      <Tab.Screen
        name="Problems"
        component={ProblemStack}
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
