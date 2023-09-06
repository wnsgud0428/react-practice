import { useEffect, useState } from "react";

function Btn({ btnName, big }) {
  console.log(btnName, big);
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: big ? 18 : 16,
      }}
    >
      {btnName}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn btnName="Save" big={true} />
      <Btn btnName="Confirm" big={false} />
    </div>
  );
}

export default App;
