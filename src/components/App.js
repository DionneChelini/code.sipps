import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import CreateCard from "../pages/CreateCard";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/main.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/createCard' component={CreateCard} />
      </Switch>
    </Router>
  );
};

export default App;
