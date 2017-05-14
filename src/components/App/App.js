import React, { Component } from 'react';
import './App.css';
//import Search from '../../search';
import SearchField from '../../containers/master'
import PastSearches from '../../containers/Past'
import CityWeather from '../../containers/info'
import ImageAndNumber from '../../containers/IandN'


class App extends Component {
  render() {
    
    return (
      <div className="page">
        <h1 >Weather App</h1>
        <div className = "App">
          <br/>
          <SearchField/>
          <div><CityWeather/><ImageAndNumber/></div>
          <PastSearches />
          <br/>
        </div> 
      </div>
    );
  }
}

export default App;
