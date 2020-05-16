import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { LoginSucess, LoginFailure } from './actions';

export function* Login({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(api.post, 'sessions', {
      cpf,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(LoginSucess(token, user));
  } catch (error) {
    console.log(error.message);
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(LoginFailure());
  }
}

export function* SignUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
  } catch (error) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(LoginFailure());
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

export function Logout() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', Login),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
  takeLatest('@auth/LOGOUT', Logout),
]);
