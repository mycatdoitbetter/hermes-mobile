import React, { useState } from 'react';
import { Platform } from 'react-native';

import {
  Container,
  LogoAndNameImage,
  AvoidingView,
  LoginText,
  SubmitButton,
  SubmitText,
  ForgotPasswordTouchable,
} from './styles';

import Input from '../../components/Input';
import images from '../../utils/images';

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function formatCPF(text) {
    text = text.replace(/[^\d]/g, '');
    setCpf(text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
  }

  return (
    <>
      <Container>
        <AvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <LogoAndNameImage source={images.logoAndName} />
          <Input
            text="CPF"
            keyboardType="number-pad"
            onChangeText={(text) => formatCPF(text)}
            value={cpf}
          />
          <Input
            text="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <SubmitButton>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>
        </AvoidingView>
        <ForgotPasswordTouchable
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <LoginText>Esqueceu sua senha?</LoginText>
        </ForgotPasswordTouchable>
      </Container>
    </>
  );
}
