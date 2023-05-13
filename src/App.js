import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const incrementCounter = () => setValue((prev) => prev + 1);
  console.log("call an api"); //state가 바뀌었을때 이 코드가 실행되지 않게 하려면??

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>click me</button>
    </div>
  );
}

export default App;
