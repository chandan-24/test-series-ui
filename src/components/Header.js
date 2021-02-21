import React from 'react'

import '../styles/header.css'

class Header extends React.Component{
  render() {
    return (
      <div className="hdr-con">
        <header className="header">
          <div className="logo-cnt">
            <span className="logo">TestSeries</span>
          </div>

          <div className="right-sec">
            <div className="nav">
              <div className="btn-cnt">
                <a href="#" className="emt-btn">Start Test</a>
              </div>

              <div className="icon icon-notif">
                <ion-icon name="notifications"></ion-icon>
              </div>

              <div className="user-avatar">
                <div >
                  <img className="avatar" src="https://avatars.githubusercontent.com/u/27084297?size=200" />
                </div>
                <div className="icon">
                  <ion-icon name="caret-down-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;