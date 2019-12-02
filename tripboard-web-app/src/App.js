import './App.css';

import { Route, Switch } from 'react-router-dom'

import FindActivity from './components/find_activity/find_activity';
import FindLocation from './components/find_location/find_location';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Switch>
          <Route exact path='/' component={FindLocation}/>
          <Route path='/activity' component={FindActivity}/>
        </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
