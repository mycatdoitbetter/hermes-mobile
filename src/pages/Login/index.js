import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { storeDataObject, storeDataString, getDataString } from '../../storage';
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
  const isSigned = useSelector(({ auth }) => auth.signed);
  const token = useSelector((state) => state.auth.token);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function formatCPF(text) {
    text = text.replace(/[^\d]/g, '');
    setCpf(text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
  }

  function Acess() {
    console.warn(`signed ANTES${isSigned} R O TOEKN ${token}`);
    dispatch(signInRequest(cpf, password));
    console.warn(`signed DEPOIS${isSigned} E O TOKEN ${token}`);
  }

  // async function handleLogin(userCPF, userPassword) {
  //   try {
  //     const response = await api.post('/sessions', {
  //       cpf: userCPF,
  //       password: userPassword,
  //     });

  //     console.log(`resposta da requisição: ${response.status}`);
  //     if (response.status === 200) {
  //       storeDataString('signed', 'true');
  //     } else {
  //       storeDataString('signed', 'false');
  //     }

  //     storeDataObject('user', response.data.user);
  //     storeDataString('token', response.data.token);
  //     const token = await getDataString('token');

  //     api.defaults.headers.Authorization = `Berear ${token}`;
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // }

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
      </AvoidingView>
      <ForgotPasswordTouchable
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <LoginText>Esqueceu sua senha?</LoginText>
      </ForgotPasswordTouchable>
    </Container>
  );
}
