import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);

  const alertMsg = () => {
    alert("cant edit it");
  }

  const setCnt = () => {
    setCount(count + 1);
  }

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={alertMsg()}>{count}</h1>
      <button className='increment-button' onClick={setCnt()}>Increment</button>
    </div>
  )
}


export default App;