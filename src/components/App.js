import React from 'react';
import Navbar from './Navbar';
import Library from '../pages/Library';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import AddSnippet from '../pages/AddSnippet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/main.css';

const App = () => {
  return (
    <Router>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/library' component={Library} />
          <Route exact path='/error_page' component={ErrorPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/add_new_code_snippet' component={AddSnippet} />
        </Switch>
      </Router>
    </Router>
  );
};

export default App;
