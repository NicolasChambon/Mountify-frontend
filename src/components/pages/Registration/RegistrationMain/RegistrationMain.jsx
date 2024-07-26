import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RxCross2 } from 'react-icons/rx';
import { FiCheck } from 'react-icons/fi';

import {
  changeRegistrationInput,
  postRegistrationForm,
  removeRegistrationInputs,
} from '../../../../actions/registrationActions';

import './RegistrationMain.scss';

const RegistrationMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeRegistrationInputs());
  }, [dispatch]);

  const emailInput =
    useSelector((state) => state.registration.emailInput) || '';
  const usernameInput = useSelector(
    (state) => state.registration.usernameInput || ''
  );
  const passwordInput = useSelector(
    (state) => state.registration.passwordInput || ''
  );
  const passwordConfirmInput = useSelector(
    (state) => state.registration.passwordConfirmInput || ''
  );

  // Username rules
  // .test(string) method is used to test if a string matches a regular expression
  const isUsernameLongEnough = usernameInput.length >= 3;
  const isUsernameStartingWithLetter = /^[a-zA-Z]/.test(usernameInput);

  // Password rules
  const isPasswordLongEnough = passwordInput.length >= 8;
  const isPasswordContainingUppercase = /[A-Z]/.test(passwordInput);
  const isPasswordContainingLowercase = /[a-z]/.test(passwordInput);
  const isPasswordContainingNumber = /\d/.test(passwordInput);
  const isPasswordContainingSpecialCharacter = /[^A-Za-z0-9]/.test(
    passwordInput
  );
  const isPasswordNotContainingSpace = !/\s/.test(passwordInput);

  return (
    <main className="RegistrationMain">
      <div className="RegistrationMain-content">
        <h2 className="RegistrationMain-content-title">
          Inscrivez-vous gratuitement
        </h2>
        <p className="RegistrationMain-content-subtitle">
          Créez votre compte en quelques secondes
        </p>
        <form
          className="RegistrationMain-content-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postRegistrationForm(navigate));
          }}
        >
          <div className="RegistrationMain-content-form-item">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailInput}
              required
              placeholder="saisir une adresse email"
              onChange={(e) => {
                dispatch(changeRegistrationInput(e.target.value, 'emailInput'));
              }}
            />
          </div>
          <div className="RegistrationMain-content-form-item username">
            <label htmlFor="username">Nom d&apos;utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={usernameInput}
              required
              placeholder="définir un nom d utilisateur"
              onChange={(e) => {
                dispatch(
                  changeRegistrationInput(e.target.value, 'usernameInput')
                );
              }}
            />
          </div>
          <div className="RegistrationMain-content-form-usernameRules">
            <div className="RegistrationMain-content-form-usernameRules-item">
              {isUsernameLongEnough ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>3 caractères minimum</p>
            </div>
            <div className="RegistrationMain-content-form-usernameRules-item">
              {isUsernameStartingWithLetter ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>Commence par une lettre</p>
            </div>
          </div>
          <div className="RegistrationMain-content-form-item password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordInput}
              required
              placeholder="définir un mot de passe"
              onChange={(e) => {
                dispatch(
                  changeRegistrationInput(e.target.value, 'passwordInput')
                );
              }}
            />
          </div>
          <div className="RegistrationMain-content-form-item">
            <label htmlFor="passwordConfirm">
              Confirmez votre mot de passe
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirmInput}
              required
              placeholder="confirmer le mot de passe"
              onChange={(e) => {
                dispatch(
                  changeRegistrationInput(
                    e.target.value,
                    'passwordConfirmInput'
                  )
                );
              }}
            />
          </div>
          <div className="RegistrationMain-content-form-passwordRules">
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordLongEnough ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>8 caractères minimum</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordContainingUppercase ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>Au moins une lettre majuscule</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordContainingLowercase ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>Au moins une lettre minuscule</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordContainingNumber ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>Au moins un chiffre</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordContainingSpecialCharacter ? (
                <FiCheck className="check special" />
              ) : (
                <RxCross2 className="cross special" />
              )}
              <p>
                {
                  'Au moins un caractère spécial (parmi !@#$%^&*()_-+={}[]:;"\'|\\,.<>?/`)'
                }
              </p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              {isPasswordNotContainingSpace ? (
                <FiCheck className="check" />
              ) : (
                <RxCross2 className="cross" />
              )}
              <p>Ne contient pas d&apos;espace</p>
            </div>
          </div>
          <button
            className="RegistrationMain-content-form-submit"
            type="submit"
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="RegistrationMain-content-login">
          Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
      </div>
    </main>
  );
};

export default RegistrationMain;
