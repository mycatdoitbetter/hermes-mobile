import React, { createContext } from 'react';

import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import dark from './utils/themes/dark';

import Router from './main';

export const ThemeContext = createContext('dark');
export default function App() {
  const isSigned = useSelector(({ auth }) => auth.signed);

  return (
    <>
      <Router signed={isSigned} />
    </>
  );
}
