import { Link } from 'react-router-dom';

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
        <form>
          <div>
            <label htmlFor="email">Adresse email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="username">Nom d&apos;utilisateur</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="passwordConfirm">
              Confirmez votre mot de passe
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              required
            />
          </div>
          <div>
            <button type="submit">S&apos;inscrire</button>
          </div>
        </form>
        <div>
          <p>
            Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegistrationMain;
