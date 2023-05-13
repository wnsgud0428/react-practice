import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const incrementCounter = () => setValue((prev) => prev + 1);
  const searchKeyword = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={searchKeyword}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>click me</button>
    </div>
  );
}

export default App;
