import React, { useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import EditPet from './components/EditPet';
import VisitFriends from './components/VisitFriends';
import PetQuestionnaire from './components/PetQuestionnaire';
import Visit from './components/Visit';
import history from './history';

const App = () => {
  useEffect(() => {
    document.title = 'Tomodachi';
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute component={Login} path='/login'/>
        <PublicRoute component={Register} path='/register'/>
        <PrivateRoute component={Visit} path='/visit/:username' />
        <PrivateRoute component={PetQuestionnaire} path='/petQuestionnaire' />
        <PrivateRoute component={EditPet} path='/editPet' />
        <PrivateRoute component={VisitFriends} path='/visitFriends' />
        <PrivateRoute component={Home} path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
