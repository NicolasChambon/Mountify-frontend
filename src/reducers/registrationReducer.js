import {
  CHANGE_REGISTRATION_INPUT,
  REMOVE_REGISTRATION_INPUTS,
} from '../actions/registrationActions';

export const initialState = {
  emailInput: '',
  usernameInput: '',
  passwordInput: '',
  confirmPasswordInput: '',
};

const registrationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTRATION_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case REMOVE_REGISTRATION_INPUTS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default registrationReducer;
