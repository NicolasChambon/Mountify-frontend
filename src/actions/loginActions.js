export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const POST_LOGIN_FORM = 'POST_LOGIN_FORM';
export const REMOVE_LOGIN_INPUTS = 'REMOVE_LOGIN_INPUTS';

export const changeLoginInput = (value, identifier) => ({
  type: CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (navigate) => ({
  type: POST_LOGIN_FORM,
  navigate,
});

export const removeLoginInputs = () => ({
  type: REMOVE_LOGIN_INPUTS,
});
