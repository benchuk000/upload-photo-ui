import * as types from '../actions/auth';

const defaultState = {
  currentUser: null,
} 

const auth = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER: 
      return Object.assign({}, state, { currentUser: action.user });
    default: 
      return state;
  }
}

export default auth;