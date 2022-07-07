//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  let location = ''
  let temp = 81
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simplr Weather Service</h1>
        <body>
        <p>Welome to the Simplr Weather Service, please enter your location to get the current weather, you will then be presented with the options to look at a 7 day forcast or enter a date for historical data</p>
        <div className="container">
        <input type="text" value ={location} placeholder= "Enter your location"/> <button>Submit</button>
        </div>
        </body>
      </header>
    </div>
  );
}

export default App;
