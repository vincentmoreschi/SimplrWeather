//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import './components/getTemperature';
function App() {
  const [location, setLocation] = useState();
  let temp = 81
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simplr Weather Service</h1>
       
        <p>Welome to the Simplr Weather Service, please enter your location to get the current weather, you will then be presented with the options to look at a 7 day forcast or enter a date for historical data</p>
        <div className="container">
        <input type="text" value = {location} 
        placeholder= "Enter your location"
        onChange={(i =>setLocation(i.target.value))}/> <button>Submit</button>
       
        </div>
        <p>{location}</p>
        
      </header>
    </div>
  );
}

export default App;
