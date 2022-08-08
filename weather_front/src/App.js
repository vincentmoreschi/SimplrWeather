//import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react';
// import getTemperature from'./components/getTemperature';
import WeatherForm from './components/WeatherForm.js'
import {useState} from 'react';
function App() {
  const [isValid, SetisValid] = useState();
  return (
    <div className="App">
      <header className="App-header">
      <h1>Simplr Weather Service</h1>
        {/* give user directions */}
        <p>Welome to the Simplr Weather Service, please enter your location to get the current weather, you will then be presented with the options to look at a 7 day forcast or enter a date for historical data</p>
        {/* render location input */}
        <WeatherForm isValid={isValid}/>
        {/* if location is valid render weather box */}
        {/* <DisplayWeather isValid={isValid}/> */}
        
      </header>
    </div>
  );
}

export default App;
