
import * as types from '../actions/manageUsers';

const defaultState = {
  selectedRow: null,
  users: [],
  sortDir: 'ASC'
}

const manageUsers = (state = defaultState, action) => {
  switch(action.type) {
    case types.API_USERS_REQUEST_SUCCESS:
    return {
      ...state,
      users: action.users
    };
    case types.SET_SELECTED_ROW: 
      return Object.assign({}, state, { selectedRow: action.selectedRow });
    case types.API_USER_DELETE_REQUEST_SUCCESS:
      return Object.assign({}, state, { 
        users: state.users.filter(user => user._id !== action.user._id),
        selectedRow: null
      });
    case types.SORTS_USERS:
      return Object.assign({}, state, { sortDir: action.sortDir });
    default:
      return state;
  }
}

export default manageUsers;