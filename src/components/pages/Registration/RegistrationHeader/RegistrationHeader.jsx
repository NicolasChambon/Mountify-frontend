import { Link } from 'react-router-dom';

import Mountify_logo from '../../../../assets/Mountify_logo_dark_title.svg';

import './RegistrationHeader.scss';

const RegistrationHeader = () => {
  return (
    <header className="RegistrationHeader">
      <div className="RegistrationHeader-wrapper">
        <Link className="RegistrationHeader-wrapper-logoContainer" to="/">
          <img
            className="RegistrationHeader-wrapper-logoContainer-logo"
            src={Mountify_logo}
            alt="Logo de Mountify"
          />
        </Link>
        <Link className="RegistrationHeader-wrapper-login" to="/login">
          Se connecter
        </Link>
      </div>
    </header>
  );
};

export default RegistrationHeader;
