import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Hello from create-react-app</h1>
      </header>
    )
  }
}

const Body = () => (
  <p className="App-info">
    This is the body
  </p>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
