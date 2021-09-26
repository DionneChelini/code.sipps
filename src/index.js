import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserState from './context/user/UserState';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);
