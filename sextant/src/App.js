import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render () {
    return (
      <div className="React App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Welcome to Exhibit 1"/>
        <Exhibit name="Welcome to Exhibit 2"/>
        <Exhibit name="Welcome to Exhibit 3"/>
        <Exhibit name="Welcome to Exhibit 4"/>
      </div>

      );

  }
  
}

export default App;
