import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";


import { setActivePath } from '../globalStore/actions/handleUiState';
import { PATHS_WITH_HEADER, PATHS_WITH_SIDEBAR } from '../constants';


import Header from './Navigation/Header';
import Sidebar from './Navigation/Sidebar';
import Dashboard from './Dashboard';
import LiveTest from './LiveTest';
import PastTest from './PastTest';
import Attempted from './Attempted';
import Profile from './Profile';
import NotFound from './NotFound';
import Login from './Login';


class App extends Component {
  componentDidMount = () => {
    this.props.setActivePath(this.props.location.pathname);
  }
  render() {
    return (
      <div className={this.props.isDarkModeOn ? 'dark' : null}>
        { PATHS_WITH_HEADER.includes(this.props.currentPath) ?
          <Header />
          : null
        }
        { PATHS_WITH_SIDEBAR.includes(this.props.currentPath) ?
          <Sidebar />
          : null
        }
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={Login} />
          <div className="absolute overflow-y-auto z-0 w-4/5 avail-height right-0 top-16">
            <Route path="/" exact>
              {
                this.props.isLoggedIn ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>
              }
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/live-test" component={LiveTest} />
            <Route path="/past-test" component={PastTest} />
            <Route path="/attempted" component={Attempted} />
            <Route path="/profile" component={Profile} />
          </div>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = { setActivePath }

const mapStateToProps = state => {
  return {
    isDarkModeOn: state.uiState.isDarkModeOn,
    currentPath: state.uiState.activePath,
    isLoggedIn: state.userState.isLoggedIn,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));