import { useEffect, useState } from "react";

function MinutesToHours() {
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
      <h3>Min 2 Hour</h3>
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

function KmToMiles() {
  return (
    <div>
      <h2>KM 2 MILES</h2>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
