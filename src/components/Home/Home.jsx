import Header from '../Header/Header';
import Hero from './Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeMap from './HomeMap/HomeMap';
import Footer from '../Footer/Footer';

import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className="Home">
        <Hero />
        <section className="Home-aboutAndMap">
          <HomeAbout />
          <HomeMap />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
