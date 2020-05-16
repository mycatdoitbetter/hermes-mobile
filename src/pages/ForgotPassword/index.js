import React from 'react';
import { Image } from 'react-native';
import images from '../../utils/images';
import { Container } from './styles';

const ForgotPassword = () => {
  return (
    <Container>
      <Image style={{ width: 250, height: 250 }} source={images.padLock} />
    </Container>
  );
};

export default ForgotPassword;
