import {
  CHANGE_LOGIN_INPUT,
  REMOVE_LOGIN_INPUTS,
} from '../actions/loginActions';

export const initialState = {
  emailInput: '',
  passwordInput: '',
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case REMOVE_LOGIN_INPUTS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default loginReducer;
