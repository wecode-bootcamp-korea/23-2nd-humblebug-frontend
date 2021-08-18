import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
