import React from 'react';
//import getTemperature from './getTemperature';
import {Error, Success} from './Alert'
class WeatherForm extends React.Component {
    constructor(props, isValid) {
      super(props);
      this.state = {
       value:'Please Enter Your Location',
       isValid: isValid
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        
      //alert('Location Submitted: ' + this.state.value);
      if(typeof this.state.value === 'string'){
        this.setState({isValid: true})
      }else{
        this.setState({isValid: false})
      }
      event.preventDefault();
    }
    
    render() {
      let alertMessage = null;
      if(this.state.isValid){
        alertMessage = <Success message={"Valid"}></Success>
        
      }
      if(this.state.isValid === false){
        alertMessage = <Error message={"Invalid location"}></Error>
        console.log(this.state.value)
      }
      return (
        // location submit container
        <div className="container">
        <input type="text" value = {this.state.vaule} 
        // when input is added,change the value of location, on button press call get weather function
        onChange={this.handleChange}/> <button onClick={this.handleSubmit}>Submit</button>
        {alertMessage}
        </div>

      );
    }
  }
  export default WeatherForm