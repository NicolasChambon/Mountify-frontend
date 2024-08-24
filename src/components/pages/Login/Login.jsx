import LoginHeader from './LoginHeader/LoginHeader';
import LoginMain from './LoginMain/LoginMain';
import LoginErrors from './LoginErrors/LoginErrors';

import './Login.scss';

const Login = () => {
  return (
    <>
      <LoginHeader />
      <LoginMain />
      <LoginErrors />
    </>
  );
};

export default Login;
