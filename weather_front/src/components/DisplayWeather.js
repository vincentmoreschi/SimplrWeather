import React from 'react';
import Temperature from './getTemperature'
class WeatherForm extends React.Component {
    constructor(props, isValid) {
      super(props);
      // inherit valid location state
      this.isValid = isValid

  

    }
    render() {
        let weather = null
        //If the location is valid get the temperature from the data and render on to DOM
        if(this.isValid){
            weather = <Temperature location={"test"}></Temperature>
        return (
            
            <div className="container">
            <button>7-Day Forecast</button>
            <button>Historical</button>
            {weather}
            </div>
        
        );
        }
      }
}
export default WeatherForm;