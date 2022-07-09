import React from 'react';
//import getTemperature from './getTemperature';
import {Error, Success} from './Alert'
import Temperature from './getTemperature';
import Historical from './getHistorical';
import SevenDay from './displaySevenday';
class WeatherForm extends React.Component {
    constructor(props, isValid) {
      console.log(isValid)
      super(props);
      
      this.state = {
       value:'',
       isValid: '',
       showOptions: false,
       optionsClicked: false,
       location:''
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleForecastClick = this.handleForecastClick.bind(this);
      this.handleHistoricalClick = this.handleHistoricalClick.bind(this);
    }
    
    handleForecastClick() {
      
      this.setState({optionsClicked: true});

    }
  
    handleHistoricalClick() {
      this.setState({optionsClicked: false});
    }


    // when changed set new value
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
    // when submit button is pressed check to see if its valid
    
    handleSubmit(event) {

      if(typeof this.state.value === 'string' && isNaN(this.state.value)){
        this.setState({isValid: true})
        this.setState({showOptions: true})
        this.setState({location:this.state.value})
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
      let forecast = null
      let historical = null
      if(this.state.isValid){
        alertMessage = <Success message={"Valid"}></Success>
        weather = <Temperature location={this.state.location}></Temperature>
        
      }
      // give feed back to user as to what caused the issue
      if(this.state.isValid === false){
        alertMessage = <Error message={"Invalid location"}></Error>
       
      }
      if(this.state.optionsClicked){
        forecast = <SevenDay></SevenDay>
        historical = null
      }
      if(this.state.optionsClicked){
        forecast = null
        historical = <Historical></Historical>
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
          {weather}
          <div className='container'>
            <HistoricalButton onClick={this.handleHistoricalClick} show={this.state.showOptions}></HistoricalButton>
            <ForecastButton onClick={this.handleForecastClick} show={this.state.showOptions}></ForecastButton>
          </div>
          {forecast}
          {historical}
        </>
        
      );
     
    }
 
  }
  function ForecastButton(props) {
    if (!props.show) {
      return null;
    }
    return (
      <button onClick={props.onClick}>
        7-Day Forecast
      </button>
    );
  }
  
  function HistoricalButton(props) {
    if (!props.show) {
      return null;
    }
    return (
      <button onClick={props.onClick}>
        Historical
      </button>
    );
  }

  export default WeatherForm;