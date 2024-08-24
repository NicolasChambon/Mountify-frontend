import { useSelector } from 'react-redux';

import './LoginErrors.scss';

const LoginErrors = () => {
  const messages =
    useSelector((state) => state.global.popUpMessage.message) || [];

  return (
    messages.length > 0 && (
      <div className="LoginErrors">
        <ul className="LoginErrors-list">
          {messages.map((message) => (
            <li key={message} className="LoginErrors-list-item">
              {message}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default LoginErrors;
