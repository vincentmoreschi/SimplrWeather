import React from 'react';
//import getTemperature from './getTemperature';
import {Error, Success} from './Alert'
import Temperature from './getTemperature';
class WeatherForm extends React.Component {
    constructor(props, isValid) {
      console.log(isValid)
      super(props);
      
      this.state = {
       value:'',
       isValid: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // when changed set new value
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    // when submit button is pressed check to see if its valid
    handleSubmit(event) {
      this.setState({value: event.target.value});
      if(typeof this.state.value === 'string'){
        
        this.setState({isValid: true})
      }else{
        this.setState({isValid: false})
      }
      event.preventDefault();
    }
    // render the input form
    render() {
      // if isValid has been set to true print a success and render the weather data
      let alertMessage = null;
      let weather = null
      if(this.state.isValid){
        alertMessage = <Success message={"Valid"}></Success>
        weather = <Temperature location={"test"}></Temperature>
        
      }
      // give feed back to user as to what caused the issue
      if(this.state.isValid === false){
        alertMessage = <Error message={"Invalid location"}></Error>
        console.log(this.state.value)
      }
      return (
        // location submit container
        <>
        <div className="container">
        <input type="text" placeholder='Please Enter your location'
        // when input is added,change the value of location
        onChange={this.handleChange}/> <button onClick={this.handleSubmit}>Submit</button>
        {alertMessage}
        </div>
        <div className="container">
            {weather}
        </div>
        </>
        
      );
     
    }
 
  }
  export default WeatherForm;