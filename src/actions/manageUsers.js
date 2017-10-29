import { actions as toastrActions } from 'react-redux-toastr'
import * as userService from '../services/userService.js';

export const SET_SELECTED_ROW = 'SET_SELECTED_ROW';
export const SET_USERS = 'SET_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const SORTS_USERS = 'SORTS_USERS';

export const API_USERS_REQUEST = '[Users] API Request';
export const API_USERS_REQUEST_SUCCESS = '[Users] API Request success';
export const API_USERS_REQUEST_FAIL = '[Users] API Request fail';

export const API_USER_DELETE_REQUEST = '[User] API Delete Request';
export const API_USER_DELETE_REQUEST_SUCCESS = '[User] API Delete Request success';
export const API_USER_DELETE_REQUEST_FAIL = '[User] API Delete Request fail';

export const setSelectedRow = selectedRow => ({
  type: SET_SELECTED_ROW,
  selectedRow
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId,
});

export const sortUsers = sortDir => ({
  type: SORTS_USERS,
  sortDir,
});

export const usersApiRequestSuccess = users => ({ type: API_USERS_REQUEST_SUCCESS, users });

export const usersApiRequestFail = () => dispatch => {
  dispatch({ type: API_USERS_REQUEST_FAIL });
  dispatch(toastrActions.add({
    type: 'error',
    title: 'Could not get users',
    timeOut: 2000,
  }))
} 

export const usersApiRequest = params => dispatch => {
  userService.getUsers(params)
    .then(({ data }) => dispatch(usersApiRequestSuccess(data)))
    .catch(() => dispatch(usersApiRequestFail()));
}

export const userApiDeleteRequestSuccess = user => ({ type: API_USER_DELETE_REQUEST_SUCCESS, user });

export const userApiDeleteRequestFail = () => dispatch => {
  dispatch({ type: API_USER_DELETE_REQUEST_FAIL });
  dispatch(toastrActions.add({
    type: 'error',
    title: 'User has not been deleted',
    timeOut: 2000,
  }))
} 

export const userApiDeleteRequest = () => (dispatch, getState) => {
  const state = getState().manageUsers;
  userService.removeUser(state.selectedRow)
    .then(({ data }) => dispatch(userApiDeleteRequestSuccess(data)))
    .catch(() => dispatch(userApiDeleteRequestFail()));
}