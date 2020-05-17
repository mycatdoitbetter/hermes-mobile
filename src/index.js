import React from 'react';
import { StatusBar } from 'react-native';

import App from './App';

import colors from './utils/colors';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <App />
    </>
  );
}
