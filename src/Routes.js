import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/footer" component={Footer} />
      </Switch>
    </Router>
  );
};
export default Routes;
