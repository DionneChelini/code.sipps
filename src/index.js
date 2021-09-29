import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
      <UserState>
        <App />
      </UserState>
    </AlertState>
  </React.StrictMode>,
  document.getElementById('root')
);
