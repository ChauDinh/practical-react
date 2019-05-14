import React, { Component } from 'react'

export default class Counter extends Component {

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.handleButtonDecrement}>decrement</button>
        <button onClick={this.props.handleButtonIncrement}>increment</button>
      </div>
    )
  }
}