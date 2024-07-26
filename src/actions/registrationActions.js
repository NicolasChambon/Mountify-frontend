export const CHANGE_REGISTRATION_INPUT = 'CHANGE_REGISTRATION_INPUT';
export const POST_REGISTRATION_FORM = 'POST_REGISTRATION_FORM';
export const REMOVE_REGISTRATION_INPUTS = 'REMOVE_REGISTRATION_INPUTS';

export const changeRegistrationInput = (value, identifier) => ({
  type: CHANGE_REGISTRATION_INPUT,
  value,
  identifier,
});

export const postRegistrationForm = (navigate) => ({
  type: POST_REGISTRATION_FORM,
  navigate,
});

export const removeRegistrationInputs = () => ({
  type: REMOVE_REGISTRATION_INPUTS,
});
