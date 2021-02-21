import React from 'react'

import Header from './Header';
import Sidebar from './Sidebar';

import '../styles/main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    )
  }
}

export default App
