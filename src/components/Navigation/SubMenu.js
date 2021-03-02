import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setActivePath } from '../../globalStore/actions/handleUiState';
import { PATHS } from '../../constants';

class SubMenu extends Component {
  handleClickOnProfile = () => {
    this.props.handleToggle();
    this.props.setActivePath(PATHS.USER_PROFILE);
  }

  handleClickOnSignOut = () => {
    this.props.handleToggle();
    this.props.setActivePath(PATHS.DASHBOARD);
  }

  render() {
    return (
      <div className="absolute block right-4 top-20">
        <div id="profile-menu" className="origin-top-right w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <Link to="/profile" onClick={this.handleClickOnProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer z-auto">Your Profile</Link>

          {/* <Link to="/profile" onClick={this.handleClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer z-auto">Settings</Link> */}

          <Link to="/" onClick={this.handleClickOnSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer z-auto">Sign out</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { setActivePath }

export default connect(null, mapDispatchToProps)(SubMenu);
