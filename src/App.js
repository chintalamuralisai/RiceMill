import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HomePage from './containers/HomePage'
import NewloadPage from './containers/NewloadPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/newload" component={NewloadPage}/>
        </div>
        
      </Router>
     
    );
  }
}

export default App;
