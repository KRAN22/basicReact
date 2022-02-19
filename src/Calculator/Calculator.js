import { useState } from "react/cjs/react.development";
import "./style.css";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const ChangeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="calculator">
      <input
        type={"text"}
        name="input"
        value={input}
        onChange={ChangeHandler}
      />
      <button onClick={() => setResult(eval(input))}>Result</button>
      <h1>Result : {result}</h1>
      <div className="btns">
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
        <button onClick={() => setInput("")}>clr</button>
      </div>
    </div>
  );
};
