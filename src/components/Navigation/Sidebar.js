import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import produce from 'immer';

import { PATHS } from '../../constants';
import { setActivePath } from '../../globalStore/actions/handleUiState';

import SidebarNavItem from './SidebarNavItem';

class Sidebar extends Component {
  componentDidMount = () => {
    const pathname = this.props.location.pathname == PATHS.ROOT
    ? PATHS.DASHBOARD : this.props.location.pathname

    switch (pathname) {
      case PATHS.DASHBOARD :
        this.props.setActivePath(PATHS.DASHBOARD);
        break;
      case PATHS.LIVE_TEST :
        this.props.setActivePath(PATHS.LIVE_TEST);
        break;
      case PATHS.PAST_TEST :
        this.props.setActivePath(PATHS.PAST_TEST);
        break;
      case PATHS.ATTEMPTED :
        this.props.setActivePath(PATHS.ATTEMPTED);
        break;
    }
  }

  handleDashboardFlag = () => {
    this.props.setActivePath(PATHS.DASHBOARD);
  }

  handleLiveTestFlag = () => {
    this.props.setActivePath(PATHS.LIVE_TEST);
  }

  handlePastTestFlag = () => {
    this.props.setActivePath(PATHS.PAST_TEST);
  }

  handleAttemptedFlag = () => {
    this.props.setActivePath(PATHS.ATTEMPTED);
  }

  resetAllFlag = () => {
    this.props.setActivePath(PATHS.USER_PROFILE);
  }

  render() {
    return (
      <div className="top-16 fixed avail-height w-1/5 bg-white border-r-2 border-gray-200 ">
        <div className="text-gray-500">
          <div className="mt-10">
            <SidebarNavItem
              isNavActive={this.props.activeNav === PATHS.DASHBOARD}
              handleNavFlag={this.handleDashboardFlag}
              goTo={PATHS.DASHBOARD}
            >
              <svg className="w-7 h-7 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>Dashboard</span>
            </SidebarNavItem>
            <SidebarNavItem
              isNavActive={this.props.activeNav === PATHS.LIVE_TEST}
              handleNavFlag={this.handleLiveTestFlag}
              goTo={PATHS.LIVE_TEST}
            >
              <svg className="w-7 h-7 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              <span>Live Test</span>
            </SidebarNavItem>
            <SidebarNavItem
              isNavActive={this.props.activeNav === PATHS.PAST_TEST}
              handleNavFlag={this.handlePastTestFlag}
              goTo={PATHS.PAST_TEST}
            >
              <svg className="w-7 h-7 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>Past Test</span>
            </SidebarNavItem>
            <SidebarNavItem
              isNavActive={this.props.activeNav === PATHS.ATTEMPTED}
              handleNavFlag={this.handleAttemptedFlag}
              goTo={PATHS.ATTEMPTED}
            >
              <svg className="w-7 h-7 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              <span>Attempted</span>
            </SidebarNavItem>
          </div>

          <div className="absolute bottom-0 left-0 w-full border-t-2">
            <div className="flex flex-row items-center mx-6 my-3">
              <div className="max-w-xs rounded-full text-sm">
                <img className="h-12 w-12 rounded-full" src="https://avatars.githubusercontent.com/u/27084297?size=200" alt="avatar" />
              </div>

              <div className="flex flex-col text-sm ml-5">
                <span className="text-gray-700">Chandan Kumar</span>
                <Link onClick={this.resetAllFlag} to="/profile" className="text-gray-500 hover:text-green-600">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = { setActivePath }

const mapStateToProps = state => {
  return {
    activeNav: state.uiState.activePath
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));
