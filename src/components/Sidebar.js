import React, { Component } from 'react';

import '../styles/sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="top">
          <div className="btn-ctn">
            <a href="#" className="dark-btn"> Dashboard</a>
          </div>
        </div>

        <div className="bottom">
          <ul className="nav-ele">
            <li><a href="#">Live Test</a></li>
            <li><a href="#">Past Test</a></li>
            <li><a href="#">Attempted</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;