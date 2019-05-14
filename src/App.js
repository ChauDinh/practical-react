import React from 'react';
import './App.css';
import FetchRandomUser from './components/FetchRandomUser';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
