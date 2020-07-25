import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Tomodachi';
  }, []);

  return (
    <Router>
      <Switch>

        <Route path ='/login'>
          <Login />
        </Route>
        
        <Route path ='/register'>
          <Register />
        </Route>

        <Route path ='/'>
          <Game />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
