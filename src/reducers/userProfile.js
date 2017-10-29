
import * as types from '../actions/userProfile';

const defaultState = {
  user: {},
  newImg: null,
  fileImg: null,
}

const userProfile = (state = defaultState, action) => {
  switch(action.type) {
    case types.API_USER_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case types.API_USER_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case types.RESET_DATA:
      return defaultState;
    case types.SET_FIELD:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value
        }
      };
    case types.SET_IMG:
      return {
        ...state,
        newImg: action.newImg,
        fileImg: action.fileImg,
      };
    default:
      return state;
  }
}

export default userProfile;