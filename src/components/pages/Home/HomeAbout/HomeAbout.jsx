import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

import './HomeAbout.scss';

const HomeAbout = () => {
  return (
    <div className="HomeAbout">
      <h2 className="HomeAbout-title">Ici vous pourrez</h2>
      <ul className="HomeAbout-list">
        <li className="HomeAbout-list-item">
          <IoIosArrowForward className="HomeAbout-list-item-icon" />
          <span className="HomeAbout-item-text">
            Découvrir toutes les montagnes répertoriées par la communauté
            Mountify
          </span>
        </li>
        <li className="HomeAbout-list-item">
          <IoIosArrowForward className="HomeAbout-list-item-icon" />
          <span className="HomeAbout-item-text">
            Nous rejoindre et partager vos plus beaux sommets
          </span>
        </li>
        <li className="HomeAbout-list-item">
          <IoIosArrowForward className="HomeAbout-list-item-icon" />
          <span className="HomeAbout-item-text">
            Accéder aux détails des montages (faune et flore environnante,
            description etc.)
          </span>
        </li>
        <li className="HomeAbout-list-item">
          <IoIosArrowForward className="HomeAbout-list-item-icon" />
          <span className="HomeAbout-item-text">
            Créer votre propre collection de sommets
          </span>
        </li>
        <li className="HomeAbout-list-item">
          <IoIosArrowForward className="HomeAbout-list-item-icon" />
          <span className="HomeAbout-item-text">
            Rencontrer une communauté de passionnés de montagne
          </span>
        </li>
      </ul>
      <Link className="HomeAbout-button" to="/about">
        En savoir plus <FaArrowRight className="HomeAbout-button-icon" />
      </Link>
    </div>
  );
};

export default HomeAbout;
