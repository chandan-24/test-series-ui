import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

import Header from './Navigation/Header';
import Sidebar from './Navigation/Sidebar';
import Dashboard from "./Dashboard";
import LiveTest from "./LiveTest";
import PastTest from "./PastTest";
import Attempted from "./Attempted";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.isDarkModeOn ? 'dark' : null}>
          <Header />
          <Sidebar />
          <div className="absolute overflow-y-auto z-0 w-4/5 avail-height right-0 top-16">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/dashboard"/>
              </Route>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/live-test" component={LiveTest} />
              <Route path="/past-test" component={PastTest} />
              <Route path="/attempted" component={Attempted} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDarkModeOn: state.uiState.isDarkModeOn
  }
}

export default connect(mapStateToProps, null)(App);