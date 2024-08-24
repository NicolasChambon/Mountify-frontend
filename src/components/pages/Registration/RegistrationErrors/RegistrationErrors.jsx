import { useSelector } from 'react-redux';

import './RegistrationErrors.scss';

const RegistrationErrors = () => {
  const messages =
    useSelector((state) => state.global.popUpMessage.message) || [];

  return (
    messages.length > 0 && (
      <div className="RegistrationErrors">
        <ul className="RegistrationErrors-list">
          {messages.map((message) => (
            <li key={message} className="RegistrationErrors-list-item">
              {message}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default RegistrationErrors;
