import { Link } from 'react-router-dom';

import { RxCross2 } from 'react-icons/rx';

import './RegistrationMain.scss';

const RegistrationMain = () => {
  return (
    <main className="RegistrationMain">
      <div className="RegistrationMain-content">
        <h2 className="RegistrationMain-content-title">
          Inscrivez-vous gratuitement
        </h2>
        <p className="RegistrationMain-content-subtitle">
          Créez votre compte en quelques secondes
        </p>
        <form className="RegistrationMain-content-form">
          <div className="RegistrationMain-content-form-item">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="saisir une adresse email"
            />
          </div>
          <div className="RegistrationMain-content-form-item username">
            <label htmlFor="username">Nom d&apos;utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="définir un nom d utilisateur"
            />
          </div>
          <div className="RegistrationMain-content-form-usernameRules">
            <div className="RegistrationMain-content-form-usernameRules-item">
              <RxCross2 className="cross" />
              <p>3 caractères minimum</p>
            </div>
            <div className="RegistrationMain-content-form-usernameRules-item">
              <RxCross2 className="cross" />
              <p>Commence par une lettre</p>
            </div>
          </div>
          <div className="RegistrationMain-content-form-item password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="définir un mot de passe"
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
              required
              placeholder="confirmer le mot de passe"
            />
          </div>
          <div className="RegistrationMain-content-form-passwordRules">
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
              <p>8 caractères minimum</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
              <p>Au moins une lettre majuscule</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
              <p>Au moins une lettre minuscule</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
              <p>Au moins un chiffre</p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
              <p>
                {
                  'Au moins un caractère spécial (parmi !@#$%^&*()_-+={}[]:;"\'|\\,.<>?/`)'
                }
              </p>
            </div>
            <div className="RegistrationMain-content-form-passwordRules-item">
              <RxCross2 className="cross" />
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
