import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DeliverymanTabs } from './routes';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

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

function LoginStack() {
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

export default ({ signed }) => {
  return (
    <NavigationContainer>
      {signed ? <DeliverymanTabs /> : <LoginStack />}
    </NavigationContainer>
  );
};
