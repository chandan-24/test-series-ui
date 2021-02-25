import React, { Component } from 'react';

class Header extends Component {
  render() {
    this.state = {
      isUserMenuActive: false,
    }

    this.toggleUserMenuClass = () => {
      const currentState = this.state.isUserMenuActive;
      this.setState({ isUserMenuActive: !currentState });
    }
    return (
      <div className="bg-white w-full h-16 border-b-2 border-gray-200 flex items-center fixed">
        <div className="px-8 flex flex-row w-full">
          <div className="text-4xl font-bold">
            test.app
          </div>

          <div className="flex flex-row-reverse items-center w-full">

            <div className="ml-3 relative">
              <div>
                <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 focus:ring-white">
                  <img className="h-12 w-12 rounded-full" src="https://avatars.githubusercontent.com/u/27084297?size=200" alt="avatar" />
                </button>
              </div>

              <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>

            <div className="mx-6 text-gray-500 relative cursor-pointer hover:text-gray-800">
              <div>
                <svg
                  className="w-9 h-9 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                /></svg>
              </div>

              <div className="bg-gradient-to-r from-blue-300 to-indigo-800 h-3 w-3 rounded-full absolute top-1 right-1.5"></div>
            </div>

            <div className="text-2xl bg-green-400 text-white px-4 py-1.5 rounded-md hover:bg-green-500 cursor-pointer delay-150">
              Start Test
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;