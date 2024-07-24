export const CHANGE_REGISTRATION_INPUT = 'CHANGE_REGISTRATION_INPUT';

export const changeRegistrationInput = (value, identifier) => ({
  type: CHANGE_REGISTRATION_INPUT,
  value,
  identifier,
});
