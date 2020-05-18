import React from 'react';
import {} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {} from '../../store/modules/auth/actions';

import { Container } from './styles';
import Logo from '../../utils/logo';
import images from '../../utils/images';

export default function Packs() {
  // const user = useSelector((state) => state.user.profile);

  // const dispatch = useDispatch();
  return (
    <Container>
      <Logo source={images.logo} />
    </Container>
  );
}
