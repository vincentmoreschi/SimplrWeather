

import DatePicker from 'react-date-picker';
import React,{useState} from 'react';
const API_KEY = process.env.OPEN_API_KEY;
const lat = 39.099724
const lon = -94.57833
function GetDate() {
  const [value, onChange] = useState(new Date());
  function ConvertToUnix(value){
    return Math.floor(value.getTime() / 1000)
  
  }
  const getData = async () => {
    console.log(value)
  const response = await fetch(`http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${ConvertToUnix(value)}&appid=eb94579fe77e1c566bfd6c66c9a1348a`);
  if(response.status === 200){
       console.log(response.text())
       alert("Successful");
  } else {
      console.log(response.text())
       alert(`Failed= ${response.status}`);
       
  }    

};
    

    return (
        <>
        <div>
        <DatePicker onChange={onChange} value={value}  />
        </div>
        <button
          onClick={getData}
            >Submit</button>
        </>
      );  
}


export default GetDate;