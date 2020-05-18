import React from 'react';
import {} from 'react-native';

import { Container } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';

export default function Problems() {
  return (
    <Container>
      <Logo source={images.logo} />
    </Container>
  );
}
