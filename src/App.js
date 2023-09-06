import { memo, useEffect, useState } from "react";

function Btn({ btnName, onClick }) {
  console.log(btnName + "was renderd");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {btnName}
    </button>
  );
}

const MemorizedBtn = memo(Btn);
function App() {
  const [value, setValue] = useState("save Changes");
  const changeValue = () => setValue("Revert Changes");

  return (
    <div>
      <MemorizedBtn btnName={value} onClick={changeValue} />
      <MemorizedBtn btnName="Confirm" />
    </div>
  );
}

export default App;
