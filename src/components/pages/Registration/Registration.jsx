import RegistrationHeader from './RegistrationHeader/RegistrationHeader';
import RegistrationMain from './RegistrationMain/RegistrationMain';
import RegistrationErrors from './RegistrationErrors/RegistrationErrors';

import './Registration.scss';

const Registration = () => {
  return (
    <>
      <RegistrationHeader />
      <RegistrationMain />
      <RegistrationErrors />
    </>
  );
};

export default Registration;
