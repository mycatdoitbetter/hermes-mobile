import React, { useState } from 'react';
import { Platform } from 'react-native';
import axios from 'axios';
import api from '../../services/api';
import {
  storeDataObject,
  storeDataString,
  getDataObject,
  removeData,
} from '../../storage';
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

  async function handleLogin(userCPF, userPassword) {
    try {
      const response = await api.post('/sessions', {
        cpf: userCPF,
        password: userPassword,
      });

      storeDataObject('user', response.data.user);
      storeDataString('token', response.data.token);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
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
          <SubmitButton onPress={() => handleLogin(cpf, password)}>
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
