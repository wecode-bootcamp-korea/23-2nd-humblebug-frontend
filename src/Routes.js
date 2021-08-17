import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};
export default Routes;
