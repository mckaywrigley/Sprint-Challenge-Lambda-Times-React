import React from 'react';

import Auth from './components/authentication/Auth';
import Login from './components/Login';
import AppView from './AppView'

const ComponentFromAuthenticate = Auth(AppView)(Login);

const App = () => {
  return (
    <div className="App">
      <ComponentFromAuthenticate />
    </div>
  );
}

export default App;
