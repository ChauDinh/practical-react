import React from 'react';
import './App.css';

import Header from "./components/Header";
import Body, { Body2 } from "./components/Body";

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
      <Body2 />
    </div>
  );
}

export default App;
