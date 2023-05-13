import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const incrementCounter = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); //state가 바뀌었을때 이 코드가 실행되지 않게 하려면?? => useEffect 사용!!

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>click me</button>
    </div>
  );
}

export default App;
