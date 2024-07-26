import { POST_REGISTRATION_FORM } from '../actions/registrationActions';
import { writePopUpMessage } from '../actions/globalActions';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_REGISTRATION_FORM: {
      fetch(`${import.meta.env.VITE_MOUNTIFY_API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: store.getState().registration.emailInput,
          username: store.getState().registration.usernameInput,
          password: store.getState().registration.passwordInput,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.errorMessages);
            });
          }
          return response.json();
        })
        .then(() => {
          action.navigate('/login');
          store.dispatch(
            writePopUpMessage(
              'Votre compte a bien été créé. Vous pouvez maintenant vous connecter.',
              'success'
            )
          );
          setTimeout(() => {
            store.dispatch(writePopUpMessage('', ''));
          }, 5000);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default registrationMiddleware;
