import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  changeLoginInput,
  postLoginForm,
  removeLoginInputs,
} from '../../../../actions/loginActions';

import './LoginMain.scss';

const LoginMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeLoginInputs());
  }, [dispatch]);

  const emailInput = useSelector((state) => state.login.emailInput) || '';
  const passwordInput = useSelector((state) => state.login.passwordInput || '');

  return (
    <main className="LoginMain">
      <div className="LoginMain-content">
        <h2 className="LoginMain-content-title">Connectez-vous</h2>

        <form
          className="LoginMain-content-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postLoginForm(navigate));
          }}
        >
          <div className="LoginMain-content-form-item">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailInput}
              required
              placeholder="saisir votre adresse email"
              onChange={(e) => {
                dispatch(changeLoginInput(e.target.value, 'emailInput'));
              }}
            />
          </div>

          <div className="LoginMain-content-form-item password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordInput}
              required
              placeholder="saisir votre mot de passe"
              onChange={(e) => {
                dispatch(changeLoginInput(e.target.value, 'passwordInput'));
              }}
            />
          </div>

          <button className="LoginMain-content-form-submit" type="submit">
            Se connecter
          </button>
        </form>
        <p className="LoginMain-content-login">
          Vous n&apos;avez pas de compte ?{' '}
          <Link to="/registration">Inscrivez-vous</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginMain;
