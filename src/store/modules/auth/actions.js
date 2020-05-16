export function LoginRequest(cpf, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { cpf, password },
  };
}

export function LoginSucess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, user },
  };
}

export function LoginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}

export function Logout() {
  return {
    type: '@auth/LOGOUT',
  };
}

// export function signInRequest(email, password) {
//   return {
//     type: '@auth/SIGN_IN_REQUEST',
//     payload: { email, password },
//   };
// }

// export function signInSuccess(accessToken, user) {
//   return {
//     type: '@auth/SIGN_IN_SUCCESS',
//     payload: { accessToken, user },
//   };
// }

// export function signUpRequest(name, email, password) {
//   return {
//     type: '@auth/SIGN_UP_REQUEST',
//     payload: { name, email, password },
//   };
// }

// export function signFailure() {
//   return {
//     type: '@auth/SIGN_IN_FAILURE',
//   };
// }

// export function signOut() {
//   return {
//     type: '@auth/SIGN_OUT',
//   };
// }
