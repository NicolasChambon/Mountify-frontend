import { Link } from 'react-router-dom';

import Mountify_logo from '../../../assets/Mountify_logo_dark_title.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-main">
        <div className="Footer-main-title">
          <Link
            className="Footer-main-title-logoContainer"
            to="/"
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo(0, 0);
              }
            }}
          >
            <img
              className="Footer-main-title-logoContainer-logo"
              src={Mountify_logo}
              alt="Logo de Mountify"
            />
          </Link>

          <p className="Footer-main-title-description">
            Explorez le monde des sommets avec Mountify
          </p>
        </div>

        <div className="Footer-main-navs">
          <nav className="Footer-main-navs-account">
            <h4 className="Footer-main-navs-account-title">Compte</h4>
            <ul className="Footer-main-navs-account-links">
              <li className="Footer-main-navs-account-links-link">
                <Link to="/login">Se connecter</Link>
              </li>
              <li className="Footer-main-navs-account-links-link">
                <Link to="/registration">S&apos;inscrire</Link>
              </li>
              <li className="Footer-main-navs-account-links-link">
                <Link to="/profile">Profil</Link>
              </li>
            </ul>
          </nav>

          <nav className="Footer-main-navs-mountify">
            <h4 className="Footer-main-navs-mountify-title">Mountify</h4>
            <ul className="Footer-main-navs-mountify-links">
              <li className="Footer-main-navs-mountify-links-link">
                <Link to="/about">À propos</Link>
              </li>
              <li className="Footer-main-navs-mountify-links-link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="Footer-main-navs-mountify-links-link">
                <Link to="/legal">Mentions légales</Link>
              </li>
              <li className="Footer-main-navs-mountify-links-link">
                <Link to="/privacy">Confidentialité</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="Footer-bottom">
        <span className="Footer-bottom-copyright">
          Copyright &copy; {new Date().getFullYear()} Mountify
        </span>
        <span className="Footer-bottom-bar"> | </span>
        <span className="Footer-bottom-rights"> Tous droits réservés</span>
        <span className="Footer-bottom-bar"> | </span>
        <span className="Footer-bottom-credits">
          Créé par{' '}
          <a href="https://nicolaschambon.github.io/" target="blank">
            Nicolas Chambon
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
