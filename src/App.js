import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  return (
    <>
      <h1>stopwatch</h1>
      {/* Time logic */}
      <div>
        <span>{'0' + Math.floor((time / 60000) % 60)}:</span>
        <span>{'0' + Math.floor((time / 1000) % 60)}:</span>
        <span>{'0' + ((time / 10) % 1000)}:</span>
      </div>
      {/* Button logic */}
      <div>
        {/* Start Button */}
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        {/* Stop Button */}
        <button
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </button>
        {/* Reset Button */}
        <button
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
