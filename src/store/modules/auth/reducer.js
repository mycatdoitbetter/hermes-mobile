import produce from 'immer';

const INITIAL_STATE = {
  // firstAcess: true,
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draft.loading = false;
        draft.token = action.payload.accessToken;
        draft.signed = true;
        break;
      }
      case '@auth/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.loading = false;
        draft.token = null;
        draft.signed = false;
        break;
      }

      // case '@auth/SIGN_IN_REQUEST': {
      //   draft.loading = true;
      //   break;
      // }
      // case '@auth/SIGN_IN_SUCCESS': {
      //   draft.accessToken = action.payload.accessToken;
      //   draft.signed = true;
      //   draft.loading = false;

      //   break;
      // }
      // case '@auth/SIGN_IN_FAILURE': {
      //   draft.loading = false;
      //   break;
      // }
      // case '@auth/SIGN_OUT': {
      //   draft.accessToken = null;
      //   draft.signed = false;
      //   break;
      // }
      default:
    }
  });
}
