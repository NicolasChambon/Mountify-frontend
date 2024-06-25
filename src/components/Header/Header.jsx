import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';
import { TbMapSearch } from 'react-icons/tb';
import { IoMenu, IoAddCircleOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { LuMountainSnow } from 'react-icons/lu';
import { FiUser, FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

import Mountify_logo from '../../assets/Mountify_logo_dark_title.svg';

import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) setIsMenuOpen(false);
      if (isUserMenuOpen) setIsUserMenuOpen(false);
    };

    const handleClick = (e) => {
      if (isMenuOpen || isUserMenuOpen) {
        if (!e.target.closest('.Header-wrapper-menu')) setIsMenuOpen(false);
        if (!e.target.closest('.Header-wrapper-userMenu'))
          setIsUserMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen, isUserMenuOpen]);

  return (
    <header className="Header">
      <div className="Header-wrapper">
        <Link
          className="Header-wrapper-logoContainer"
          to="/"
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo(0, 0);
            }
          }}
        >
          <img
            className="Header-wrapper-logoContainer-logo"
            src={Mountify_logo}
            alt="Logo de Mountify"
          />
        </Link>

        <div className="Header-wrapper-search">
          <button className="Header-wrapper-search-button" type="button">
            <CiSearch className="Header-wrapper-search-button-icon" />
          </button>

          <input
            className="Header-wrapper-search-input"
            type="text"
            placeholder="Chercher par nom de montagne"
          />

          <Link className="Header-wrapper-search-mapLink" to="/map">
            <TbMapSearch className="Header-wrapper-search-mapLink-icon" />
          </Link>
        </div>

        <Link className="Header-wrapper-discover" to="/mountains">
          Découvrir <FaArrowRight className="Header-wrapper-discover-icon" />
        </Link>

        {!isLogged && (
          <div className="Header-wrapper-buttons">
            <Link className="Header-wrapper-buttons-login" to="/login">
              Se connecter
            </Link>

            <Link className="Header-wrapper-buttons-signup" to="/registration">
              S&apos;inscrire
            </Link>
          </div>
        )}

        {isLogged && (
          <div className="Header-wrapper-buttonsLogged">
            <Link
              className="Header-wrapper-buttonsLogged-addMoutain"
              to="/mountains/create"
            >
              <IoAddCircleOutline
                className="Header-wrapper-buttonsLogged-addMountain-icon"
                size="1.4rem"
              />

              <p className="Header-wrapper-buttonsLogged-addMountain-text">
                Nouvelle montagne
              </p>
            </Link>

            <button
              className="Header-wrapper-buttonsLogged-user"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsUserMenuOpen(!isUserMenuOpen);
              }}
            >
              <div className="Header-wrapper-buttonsLogged-user-avatarContainer">
                <img
                  className="Header-wrapper-buttonsLogged-user-avatarContainer-avatar"
                  src="https://ca.slack-edge.com/T06D8GCDB4H-U072ZJ32T6C-dbfd61d097f2-512"
                  alt="Avatar de l'utilisateur"
                />
              </div>

              {!isUserMenuOpen && (
                <IoIosArrowDown className="Header-wrapper-buttonsLogged-user-icon" />
              )}
              {isUserMenuOpen && (
                <IoIosArrowUp className="Header-wrapper-buttonsLogged-user-icon" />
              )}
            </button>
          </div>
        )}

        <button
          className="Header-wrapper-menuBtn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen && <RxCross2 />}
          {!isMenuOpen && <IoMenu />}
        </button>

        {isUserMenuOpen && (
          <div className="Header-wrapper-userMenu">
            {isLogged && (
              <Link className="Header-wrapper-userMenu-link" to="/profile">
                <p>Mon profil</p>
                <FiUser size="1.3rem" />
              </Link>
            )}

            {isLogged && (
              <Link className="Header-wrapper-userMenu-link" to="/">
                <p>Se déconnecter</p>
                <FiLogOut size="1.3rem" />
              </Link>
            )}
          </div>
        )}

        {isMenuOpen && (
          <div className="Header-wrapper-menu">
            <Link className="Header-wrapper-menu-link" to="/map">
              <p>Carte</p>
              <TbMapSearch size="1.3rem" />
            </Link>

            <Link className="Header-wrapper-menu-link" to="/mountains">
              <p>Découvrir</p>
              <LuMountainSnow size="1.3rem" />
            </Link>

            {isLogged && (
              <Link className="Header-wrapper-menu-link" to="/mountains/create">
                <p>Nouvelle montagne</p>
                <IoAddCircleOutline size="1.3rem" />
              </Link>
            )}

            {isLogged && (
              <Link className="Header-wrapper-menu-link" to="/profile">
                <p>Mon profil</p>
                <FiUser size="1.3rem" />
              </Link>
            )}

            {isLogged && (
              <Link className="Header-wrapper-menu-link" to="/">
                <p>Se déconnecter</p>
                <FiLogOut size="1.3rem" />
              </Link>
            )}

            {!isLogged && (
              <Link className="Header-wrapper-menu-link" to="/login">
                <p>Se connecter</p>
                <FiLogIn size="1.3rem" />
              </Link>
            )}

            {!isLogged && (
              <Link className="Header-wrapper-menu-link" to="/registration">
                <p>S&apos;inscrire</p>
                <FiUserPlus size="1.3rem" />
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
