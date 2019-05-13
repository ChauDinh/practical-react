import React, { Component } from 'react'

export default class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initCount
    }
  }

  handleButtonIncrement = () => {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  }

  handleButtonDecrement = () => {
    let count = this.state.count;
    this.setState({
      count: count - 1
    });
  }

  componentDidMount() {
    console.log("mounting...");
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleButtonDecrement}>decrement</button>
        <button onClick={this.handleButtonIncrement}>increment</button>
      </div>
    )
  }
}