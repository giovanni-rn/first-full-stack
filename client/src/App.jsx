import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [sum, setSum] = useState("");

  useEffect(() => {
    const fetchHello = async () => {
      const { data } = await axios.get("http://localhost:3000/api/");
      setMessage(data.message);
    };
    fetchHello();
  });

  const getResult = async (e) => {
    e.preventDefault();
    console.log(e);
    const { data } = await axios.get(
      "http://localhost:3000/api/" + e.target[0].value
    );
    setResult(data.message);
  };

  const addNumbers = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3000/api/", {
      first: e.target[0].value,
      second: e.target[1].value,
    });
    setSum(data.message);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>{result}</h2>
      <h3>{sum}</h3>
      <form onSubmit={(e) => getResult(e)}>
        <input type="number" name="number" id="number" />
        <br /> <br />
        <input type="submit" value="Multiplie par 2 !" />
      </form>
      <br />
      <br />
      <br />
      <form onSubmit={(e) => addNumbers(e)}>
        <input type="number" name="first" id="first" />
        <br />
        <input type="number" name="second" id="second" />
        <br />
        <input type="submit" value="Additionner" />
      </form>
    </div>
  );
}

export default App;
