import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import Mountify_logo from '../../../../assets/Mountify_logo_3colors_title.svg';
import Landscape from '../../../../assets/Mountify_landscape_black.svg';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-logoContainer">
        <img
          className="Hero-logoContainer-logo"
          src={Mountify_logo}
          alt="Logo de Mountify"
        />
      </div>
      <div className="Hero-landscapeContainer">
        <img
          className="Hero-landscapeContainer-landscape"
          src={Landscape}
          alt=""
        />
      </div>
      <div className="Hero-content">
        <h1 className="Hero-content-title">
          Explorez le monde des sommets avec Mountify
        </h1>
        <p className="Hero-content-description">
          Mountify est votre guide ultime pour découvrir et partager les
          merveilles des montagnes à travers le monde. Parcourez notre
          collection de sommets majestueux, partagez les votres et rejoignez une
          communauté passionnée de voyageurs et d&apos;amateurs de montagne.
        </p>
        <Link className="Hero-content-button" to="/mountains">
          Découvrir <FaArrowRight className="Hero-content-button-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
