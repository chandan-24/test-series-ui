import React, { Component } from 'react';

import Spinner from './Spinner';

class LiveTest extends Component {
  render() {
    return (
      <div className="justify-center text-gray-800 text-6xl">
        Live Test

        <Spinner message="Loading..."/>
      </div>
    );
  }
}

export default LiveTest;