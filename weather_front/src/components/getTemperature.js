
import React from 'react';


function Temperature({location}) {
    return (
        <>
        <div>{location}: 81 Degrees</div>
        <button>7-Day Forecast</button>
          <button>Historical</button>
        </>
      );  
}


export default Temperature;