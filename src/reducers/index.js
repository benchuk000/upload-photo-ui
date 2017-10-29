import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import headerModal from './headerModal';
import manageUsers from './manageUsers';
import userProfile from './userProfile';

const rootReducer = combineReducers({
  toastr,
  auth,
  headerModal,
  manageUsers,
  userProfile,
});

export default rootReducer;