import { actions as toastrActions } from 'react-redux-toastr'
import * as userService from '../services/userService.js';

export const API_USER_REQUEST = '[User] API Request';
export const API_USER_REQUEST_SUCCESS = '[User] API Request success';
export const API_USER_REQUEST_FAIL = '[User] API Request fail';

export const API_USER_UPDATE_REQUEST = '[User] API Update Request';
export const API_USER_UPDATE_REQUEST_SUCCESS = '[User] API Update Request success';
export const API_USER_UPDATE_REQUEST_FAIL = '[User] API Update Request fail';

export const SET_FIELD = '[User] set field';
export const SET_IMG = '[User] set img';

export const RESET_DATA = '[User] reset data';

export const userApiRequestSuccess = user => ({ type: API_USER_REQUEST_SUCCESS, user });

export const resetData = () => ({type: RESET_DATA })
export const userApiRequestFail = () => ({ type: API_USER_REQUEST_FAIL });

export const userApiRequest = id => dispatch => {
  userService.getUserByID(id)
    .then(({ data }) => dispatch(userApiRequestSuccess(data[0])))
    .catch(() => dispatch(userApiRequestFail()));
}

export const userApiUpdateRequestSuccess = user => dispatch => {
  dispatch({ type: API_USER_UPDATE_REQUEST_SUCCESS, user });
  dispatch(toastrActions.add({ 
    type: 'success',
    title: 'User has been updated',
    timeOut: 2000,
  }));
};

export const userApiUpdateRequestFail = () => dispatch => {
  dispatch({ type: API_USER_UPDATE_REQUEST_FAIL });
  dispatch(toastrActions.add({
    type: 'error',
    title: 'User has not been updated',
    timeOut: 2000,
  }))
};

export const userApiUpdateRequest = id => (dispatch, getState) => {
  const state = getState().userProfile;
  const formData = new FormData();

  if (state.fileImg) {
    formData.append('profileImage', state.fileImg);
  }

  formData.append('email', state.user.email);
  formData.append('password', state.user.password);

  userService.updateUserByID(id, formData)
    .then(({ data }) => dispatch(userApiUpdateRequestSuccess(data)))
    .catch(() => dispatch(userApiUpdateRequestFail()));
}

export const setField = (name,value) => ({ type: SET_FIELD, name, value });

export const setImg = (newImg, fileImg) => ({ type: SET_IMG, newImg, fileImg });
