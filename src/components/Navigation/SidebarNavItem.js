import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarNavItem extends Component {
  render() {
    return (
      <Link onClick={this.props.handleNavFlag} className={(this.props.isNavActive ? 'bg-red-100 ': null) + " mx-6 flex flex-row items-center h-12 rounded-md hover:shadow-lg hover:text-gray-800 transition ease-in-out duration-700"} to={this.props.goTo}>
      {this.props.children}
      </Link>
    );
  }
}

export default SidebarNavItem;