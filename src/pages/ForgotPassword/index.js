import React from 'react';

import images from '../../utils/images';
import {
  Container,
  ImagePadlock,
  AvoidingView,
  RecoveryButton,
  RecoveryText,
  TextRecoveryButton,
} from './styles';
import Input from '../../components/Input';

export default function ForgotPassword() {
  return (
    <Container>
      <AvoidingView>
        <ImagePadlock source={images.padLock} />
        <RecoveryText numberOfLines={2}>Recupere sua senha!</RecoveryText>
        <Input label="Email" keyboardType="email-address" />
        <RecoveryButton>
          <TextRecoveryButton>Confirmar</TextRecoveryButton>
        </RecoveryButton>
      </AvoidingView>
    </Container>
  );
}
