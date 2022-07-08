
import React from 'react';


function Error({message}) {
    return (
        
        <div className='error'>An error was generated because of {message}</div>
      );  
}
function Success({message}) {
  return (
      
      <div className='success'>{message}</div>
    );  
}

export  {Error, Success}