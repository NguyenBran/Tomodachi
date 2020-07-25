import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  useEffect(() => {
    document.title = 'Tomodachi';
  }, []);

  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} path='/login'/>
        <PublicRoute component={Register} path='/register'/>
        <PrivateRoute component={Game} path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
