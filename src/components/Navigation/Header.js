import React, { Component } from 'react';
import { connect } from 'react-redux';


import SubMenu from "./SubMenu";
import DarkModeOff from '../../assets/icons/dark-off.svg';
import DarkModeOn from '../../assets/icons/dark-on.svg';

import { toggleDarkMode } from '../../globalStore/actions/darkMode';

class Header extends Component {
  wrapperRef = React.createRef();

  state = {
    isUserMenuActive: false,
    isDarkModeOn: false,
  }

  toggleUserMenu = () => {
    this.setState({ isUserMenuActive: !this.state.isUserMenuActive });
  }

  toggleDarkMode = () => {
    this.props.toggleDarkMode(!this.state.isDarkModeOn);
    this.setState({ isDarkModeOn: !this.state.isDarkModeOn });
  }

  render() {
    return (
      <div className="bg-white z-10 w-full h-16 border-b-2 border-gray-200 flex items-center fixed  dark:bg-gray-800">
        <div className="px-8 flex flex-row w-full">
          <div className="text-4xl font-bold dark:text-white">
            test.app
          </div>

          <div className="flex flex-row-reverse items-center w-full">
            <div>
              <div>
                <button
                  id="avatar-ctn"
                  onClick={this.toggleUserMenu}
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 focus:ring-white"
                >
                  <img id="avatar" className="h-12 w-12 rounded-full" src="https://avatars.githubusercontent.com/u/27084297?size=200" alt="avatar" />
                </button>
              </div>
            </div>

            <div className="mx-6 cursor-pointer">
              <div onClick={this.toggleDarkMode} className="flex items-center w-11 h-11 rounded-full bg-gray-600 hover:bg-gray-800 dark:bg-white">
                <img className="mx-2 w-8 h-8 dark:text-yellow-400" src={this.state.isDarkModeOn ? DarkModeOn : DarkModeOff} />
              </div>
            </div>

            <div className="text-2xl bg-green-400 text-white px-4 py-1.5 rounded-md hover:bg-green-500 cursor-pointer delay-150">
              Start Test
            </div>
          </div>
        </div>
        {this.state.isUserMenuActive ?
          <SubMenu handleToggle={this.toggleUserMenu}/> : null}
      </div>
    );
  }
}

const mapDispatchToProps = { toggleDarkMode, }

export default connect(null, mapDispatchToProps)(Header);
