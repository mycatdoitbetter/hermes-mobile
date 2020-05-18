export function signInRequest(cpf, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { cpf, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, cpf, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, cpf, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
