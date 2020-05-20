import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';

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
import { signInRequest } from '../../store/modules/auth/actions';

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function formatCPF(text) {
    text = text.replace(/[^\d]/g, '');
    setCpf(text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
  }

  function Acess() {
    dispatch(signInRequest(cpf, password));
  }

  return (
    <Container>
      <AvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LogoAndNameImage source={images.logoAndName} />
        <Input
          label="CPF"
          keyboardType="number-pad"
          onChangeText={(text) => formatCPF(text)}
          value={cpf}
        />
        <Input
          label="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <SubmitButton onPress={() => Acess()}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <ForgotPasswordTouchable
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <LoginText>Esqueceu sua senha?</LoginText>
        </ForgotPasswordTouchable>
      </AvoidingView>
    </Container>
  );
}
