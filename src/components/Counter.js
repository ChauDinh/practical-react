import React, { Component } from 'react'

export default class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initCount
    }
  }

  handleButtonClick = () => {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleButtonClick}>increment</button>
      </div>
    )
  }
}