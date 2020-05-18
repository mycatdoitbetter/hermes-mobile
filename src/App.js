import React from 'react';

import { useSelector } from 'react-redux';
import Router from './main';

export default function App() {
  const isSigned = useSelector(({ auth }) => auth.signed);

  return <Router signed={isSigned} />;
}
