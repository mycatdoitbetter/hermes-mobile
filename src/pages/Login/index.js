import React from 'react';
// import { Text, Image, StatusBar } from 'react-native';
import { Container, LogoAndNameImage } from './styles';
import images from '../../utils/images';

export default function Login() {
  return (
    <Container>
      <LogoAndNameImage source={images.logoAndName} />
      {/* <Text>Login</Text> */}
    </Container>
  );
}
