import produce from 'immer';

import dark from '../../../utils/themes/dark';
import light from '../../../utils/themes/light';

const INITIAL_STATE = {
  theme: dark,
};

export default function configs(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@configs/TOGGLE_THEME': {
        draft.profile = light;
        break;
      }

      default:
    }
  });
}
