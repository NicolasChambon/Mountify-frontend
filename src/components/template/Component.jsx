import SubComponent from '../../folder/SubComponent/SubComponent';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

import './Component.scss';

const Component = () => {
  return (
    <>
      <Header />
      <main className="Component">
        <SubComponent />
      </main>
      <Footer />
    </>
  );
};

export default Component;
