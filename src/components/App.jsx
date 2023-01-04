import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("Time");
  console.log(time);

  function click() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(click, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={click}>Get Time</button>
    </div>
  );
}

export default App;
