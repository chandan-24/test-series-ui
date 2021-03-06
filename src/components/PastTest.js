import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import TestItem from './TestItem';
import { loadOverTest } from '../globalStore/actions/loadData';
import testData from '../assets/testData.json';

class PastTest extends Component {
  state = {
    pastTestData: [],
    isLoaded: false,
  }

  componentDidMount = () => {
    this.setState({
      isLoaded: this.props.pastTestData.isLoaded,
      pastTestData: this.props.pastTestData.data,
    })

    if (!this.state.isLoaded) {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          pastTestData: testData.pastTest,
        })
        this.props.loadOverTest(testData);
      }, 2000);
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <Spinner />
    }
    return (
      <div className="justify-center text-gray-800 text-6xl">
        { this.state.pastTestData.map(test => {
          return <TestItem />
        })}
      </div>
    );
  }
}


const mapDispatchToProps = { loadOverTest }

const mapStateToProps = state => {
  return {
    pastTestData: state.testData.pastTestsData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastTest);
