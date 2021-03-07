import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import TestItem from './TestItem';
import { loadOverTest } from '../globalStore/actions/loadData';
import testData from '../assets/testData.json';

class Attempted extends Component {
  state = {
    attempted: [],
    isLoaded: false,
  }

  componentDidMount = () => {
    this.setState({
      isLoaded: this.props.attempted.isLoaded,
      attempted: this.props.attempted.data,
    })

    if (!this.state.isLoaded) {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          attempted: testData.attempted,
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
      <div className="mb-12">
        { this.state.attempted.map(test => {
            return <TestItem
              testName={test.testName}
              keyName="Score"
              value={`${test.score}/${test.totalScore}`}
              op="Analysis"
            />
          }) 
        }
      </div>
    );
  }
}

const mapDispatchToProps = { loadOverTest }

const mapStateToProps = state => {
  return {
    attempted: state.testData.attemptedTestsData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attempted);
