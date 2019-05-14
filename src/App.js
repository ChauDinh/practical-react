import React from 'react';
import './App.css';
import Counter from "./components/Counter"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("mounting...");
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
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

  render() {

    return (
      <div className="App">
        <Counter count={this.state.count} handleButtonIncrement={this.handleButtonIncrement} handleButtonDecrement={this.handleButtonDecrement} />
      </div>
    );
  }
}

export default App;
