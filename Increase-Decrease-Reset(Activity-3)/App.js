import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="container">
      <div className="App">
          <h1 className='title'>Increase and Decrease Application</h1>
          <button className='btn-i' onClick={() => setCount(count + 1)}> Increase </button>
          <button className='btn-d' onClick={() => setCount(count - 1)} disabled={ count === 0}> Decrease </button>
          <button className='btn-z' onClick={() => setCount(0)} disabled={ count === 0}> Set to Zero </button>
          <h1 className='num'> {count} </h1>
      </div>
    </div>
  );
}

export default App;