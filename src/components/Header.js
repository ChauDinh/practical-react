import React, { Component } from 'react'

export class Header extends Component {
  multiple(a, b) {
    return a * b;
  }
  render() {
    const { title, num, myObj, myArr, myFunc } = this.props; // Destructuring
    return (
      <header className="App-header">
        <h1>{title}</h1>
        <p>{num}</p>
        <div>{myObj.a}</div>
        <div>{myObj.b}</div>
        <div>{JSON.stringify(myObj)}</div>
        <div>{myArr.map(e => Math.pow(e, 2) + ` `)}</div>
        <div>{myFunc(4,4)}</div>
        <div>{this.multiple(4,4)}</div>
      </header>
    )
  }
}

export default Header
