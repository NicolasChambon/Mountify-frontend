export const WRITE_POPUP_MESSAGE = 'WRITE_POPUP_MESSAGE';

// status: 'success' or 'error'
export const writePopUpMessage = (popUpMessage) => ({
  type: WRITE_POPUP_MESSAGE,
  popUpMessage,
});
