import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [inverted, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          // disabled={flipped === true}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          // disabled={flipped === false}
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
}

export default App;
