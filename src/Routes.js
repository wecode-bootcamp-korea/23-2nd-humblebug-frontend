import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Slide from './components/Slide';
import Update from './pages/Update/Update';
import Filter from './pages/Filter/Filter';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/slide" component={Slide} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/filter" component={Filter} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
