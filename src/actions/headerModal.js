export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const openModal = () => ({ type: OPEN_MODAL });

export const closeModal = () => ({ type: CLOSE_MODAL });

export const setSelectedTab = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  selectedTab
});