
import * as types from '../actions/headerModal';

const defaultState = {
  isOpen: false,
  selectedTab: null
}

const headerModal = (state = defaultState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL: 
      return Object.assign({}, state, { isOpen: true });
    case types.CLOSE_MODAL: 
      return Object.assign({}, state, { isOpen: false });
    case types.SET_SELECTED_TAB: 
      return Object.assign({}, state, { selectedTab: action.selectedTab });
    default: 
      return state;
  }
}

export default headerModal;