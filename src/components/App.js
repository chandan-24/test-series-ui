import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from "./Dashboard";
import LiveTest from "./LiveTest";
import PastTest from "./PastTest";
import Attempted from "./Attempted";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div className="absolute w-4/5 avail-height right-0 top-16">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/dashboard"/>
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/live-test" component={LiveTest} />
            <Route path="/past-test" component={PastTest} />
            <Route path="/attempted" component={Attempted} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;