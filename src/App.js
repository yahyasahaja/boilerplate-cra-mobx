import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observable } from 'mobx'
import { observer } from 'mobx-react'


@observer
class App extends React.Component {
  @observable text = 'Learn React'

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.text}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
