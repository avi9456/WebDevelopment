import React,{useState} from "react";

function App(){
  const [time,setTime] = useState(new Date().toLocaleTimeString().replace("PM",""));
  function changeTime(){
    setTime(new Date().toLocaleTimeString().replace("PM",""));
  }
  setInterval(changeTime,1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
    
  );
}

export default App;