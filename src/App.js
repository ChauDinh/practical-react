import React from 'react';
import './App.css';

class Header extends React.Component {
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

const Body = (props) => ( // in functional components, we can't do this.props if they haven't props parameter
<div>
  <p className="App-info">
    {props.text}
  </p>
  <div>{props.myFunc(1, 2)}</div>
</div>
)

function App() {
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <Header 
        title="Hello from App" 
        num={5} 
        myObj={{
          a: 5,
          b: 6
        }} 
        myArr = {[1, 2, 3]}
        myFunc = {add}
      />
      <Body 
        text="Hello from body!" 
        myFunc={add}  
      />
    </div>
  );
}

export default App;
