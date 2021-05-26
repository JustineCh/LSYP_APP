import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

export const LoginView = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
};
