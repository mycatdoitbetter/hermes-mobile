import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

export default function Index() {
  console.ignoredYellowBox = true;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
