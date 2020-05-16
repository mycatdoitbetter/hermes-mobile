import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { DeliverymanTabs } from './routes';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

const Stack = createStackNavigator();

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
        options={{
          title: 'Recuperação de senha',
          cardShadowEnabled: false,
          headerStyle: {
            backgroundColor: '#4BAF4F',
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'cente',
        }}
      />
    </Stack.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <LoginStack />
    {/* <DeliverymanTabs /> */}
  </NavigationContainer>
);
