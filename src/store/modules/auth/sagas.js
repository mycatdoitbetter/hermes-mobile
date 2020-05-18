import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(api.post, '/sessions', {
      cpf,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Berear ${token}`;
  } catch (error) {
    console.log(error.message);
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, cpf, password } = payload;

    yield call(api.post, 'users', {
      name,
      cpf,
      password,
    });

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
  } catch (error) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Berear ${token}`;
  }
}

export function signOut() {
  return true;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
