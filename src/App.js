import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';

class App extends React.Component {

  state = {
    visible: true
  }

  render() {

    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div className="App">
        {this.state.visible ? <ImageSlider /> : <div>I'm hidden</div> }
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
