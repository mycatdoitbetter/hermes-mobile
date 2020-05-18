import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

import colors from './utils/colors';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.background} />
      <App />
    </Provider>
  );
}
