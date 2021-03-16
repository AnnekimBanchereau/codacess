export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

export const toggleMenuVisibility = () => ({
  type: TOGGLE_MENU_VISIBILITY,
});

export const FETCH_THEMES = 'FETCH_THEMES';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const SET_THEMES = 'SET_THEMES';

export const setThemes = (themes) => ({
  type: SET_THEMES,
  themes,
});

export const SET_MODAL_CONFIRM = 'SET_MODAL_CONFIRM';

export const setModalConfirm = (modalConfirmParams) => ({
  type: SET_MODAL_CONFIRM,
  modalConfirmParams,
});

export const UNSET_MODAL_CONFIRM = 'UNSET_MODAL_CONFIRM';

export const unsetModalConfirm = () => ({
  type: UNSET_MODAL_CONFIRM,
});

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (messageParams) => ({
  type: SET_MESSAGE,
  messageParams,
});

export const UNSET_MESSAGE = 'UNSET_MESSAGE';

export const unsetMessage = () => ({
  type: UNSET_MESSAGE,
});
