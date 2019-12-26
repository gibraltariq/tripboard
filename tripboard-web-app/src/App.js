import './App.scss';

import { Route, Switch } from 'react-router-dom'

import ActivityDetailed from './components/activity_detailed/activity_detailed';
import FindActivity from './components/find_activity/find_activity';
import FindLocation from './components/find_location/find_location';
import Itinerary from './components/itinerary/itinerary';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Switch>
          <Route path='/activity/:id' component={ActivityDetailed}/>
          <Route path='/activity' component={FindActivity}/>
          <Route paht='/itinerary' component={Itinerary}/>
          <Route path='/' component={FindLocation}/>
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
