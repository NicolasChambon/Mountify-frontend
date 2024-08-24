import { Link } from 'react-router-dom';

import Mountify_logo from '../../../../assets/Mountify_logo_dark_title.svg';

import './LoginHeader.scss';

const LoginHeader = () => {
  return (
    <header className="LoginHeader">
      <div className="LoginHeader-wrapper">
        <Link className="LoginHeader-wrapper-logoContainer" to="/">
          <img
            className="LoginHeader-wrapper-logoContainer-logo"
            src={Mountify_logo}
            alt="Logo de Mountify"
          />
        </Link>
        <Link className="LoginHeader-wrapper-register" to="/registration">
          S&apos;inscrire
        </Link>
      </div>
    </header>
  );
};

export default LoginHeader;
