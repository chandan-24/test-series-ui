import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestItem extends Component {
  render() {
    const {testName, keyName, value, op} = this.props;
    return (
      <div className="flex bg-white rounded-lg max-w-3xl h-20 ml-auto mr-auto mt-12 hover:shadow-lg">
        <div className="w-full flex flex-row items-center self-center">
          <div className="flex-60 text-3xl font-medium">
            <span className="ml-8">{testName || 'TESTNAME'}</span>
          </div>
          <div className="flex flex-col flex-20 text-sm">
            <div className="self-center">
              {keyName}
            </div>
            <div className="self-center">
              {value || '00 : 30 hrs'}
            </div>
          </div>
          <div className="flex flex-col flex-20">
            <Link to="" className="bg-green-400 text-white font-semibold self-center text-lg px-4 py-1.5 rounded-md hover:bg-green-500 cursor-pointer ease-in-out duration-400 shadow-lg">
              {op || 'Start'}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TestItem;