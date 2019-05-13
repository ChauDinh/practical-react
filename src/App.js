import React from 'react';
import './App.css';
import Counter from "./components/Counter";

class App extends React.Component {

  state = {
    visible: true
  }

  render() {

    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div className="App">
        <div style={this.state.visible ? {} : {
          display: "none"
        }}>
          <Counter initCount={0} />
        </div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          })
        }}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
