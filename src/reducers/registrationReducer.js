import { CHANGE_REGISTRATION_INPUT } from '../actions/registrationActions';

export const initialState = {
  emailInput: '',
  usernameInput: '',
  passwordInput: '',
};

const registrationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTRATION_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default registrationReducer;
