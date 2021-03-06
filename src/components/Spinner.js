import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto mt-40 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8"></div>
        <span>{this.props.message || 'Loading...'}</span>
      </div>
    );
  }
}

export default Spinner;