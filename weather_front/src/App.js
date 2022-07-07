//import logo from './logo.svg';
import './App.css';

function App() {
  let location = ''
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simplr Weather Service</h1>
        <input type="text" value ={location}/> <button>Submit</button>
        

      </header>
    </div>
  );
}

export default App;
