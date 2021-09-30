import React from 'react';
import Navbar from './Navbar';
import Library from '../pages/Library';
import AddSnippet from '../pages/AddSnippet';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/main.css';

const App = () => {
  return (
    <Router>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Library} />
          <Route exact path='/add_new_code_snippet' component={AddSnippet} />
        </Switch>
      </Router>
    </Router>
  );
};

export default App;
