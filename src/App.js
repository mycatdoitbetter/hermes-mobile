import React, { createContext, useState } from 'react';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import dark from './utils/themes/dark';
import light from './utils/themes/light';

import Router from './main';

export const ThemeContext = createContext('dark');
export default function App() {
  const isSigned = useSelector(({ auth }) => auth.signed);

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <ThemeContext.Provider value={toggleTheme}>
        <StatusBar
          backgroundColor={theme === 'light' ? light.primary : dark.primary}
        />
        <Router signed={isSigned} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
