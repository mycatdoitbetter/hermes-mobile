import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  avatar: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;

        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      case '@user/UPDATE_LOCAL_AVATAR': {
        draft.avatar = null;
        break;
      }

      default:
    }
  });
}
