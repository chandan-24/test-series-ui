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

  calcTestTime(timeInMin) {
    const hrs = Math.floor(timeInMin / 60);
    const min = timeInMin % 60;
    const hrsStr = hrs > 9 ? hrs : '0' + hrs; 
    const minStr = min > 0 ? min : '0' + min;
    return `${hrsStr} : ${minStr} hrs`
  }

  render() {
    if (!this.state.isLoaded) {
      return <Spinner />
    }
    return (
      <div className="mb-12">
        { this.state.pastTestData.map(test => {
            return <TestItem
              testName={test.testName}
              keyName="Test Time"
              value={this.calcTestTime(test.duration)}
              op="Clone"
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
    pastTestData: state.testData.pastTestsData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastTest);
