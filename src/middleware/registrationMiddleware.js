import { POST_REGISTRATION_FORM } from '../actions/registrationActions';
import { writePopUpMessage } from '../actions/globalActions';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_REGISTRATION_FORM: {
      const registerUser = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_MOUNTIFY_API_URL}/users/register`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: store.getState().registration.emailInput,
                username: store.getState().registration.usernameInput,
                password: store.getState().registration.passwordInput,
              }),
            }
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errorMessages);
          }
          await response.json();
          action.navigate('/login');
          store.dispatch(
            writePopUpMessage([
              'Votre compte a bien été créé. Vous pouvez maintenant vous connecter.',
            ])
          );
          setTimeout(() => {
            store.dispatch(writePopUpMessage([]));
          }, 5000);
        } catch (error) {
          console.error(error);
          const errorsTable = error.message.split(',');
          store.dispatch(writePopUpMessage(errorsTable));
          setTimeout(() => {
            store.dispatch(writePopUpMessage([]));
          }, 5000);
        }
      };
      registerUser();
      break;
    }
    default:
  }
  return next(action);
};

export default registrationMiddleware;
