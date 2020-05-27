import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import configs from './configs/reducer';

export default combineReducers({
  auth,
  user,
  configs,
});
