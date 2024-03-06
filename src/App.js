import { useState } from "react";
import "./styles.css";
import LargeText from "./components/LargeText";
import Button from "./components/Button";

const App = () => {
  console.log("App Component was re-rendered");
  const [counter, setCounter] = useState(0);
  const buttonText = "More";
  const buttonTextTwo = "Less";
  const onClickIncrement = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  const onClickDecrement = () => {
    console.log(counter);
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <Button onClick={onClickIncrement} buttonText={buttonText} />{' '}
      <Button onClick={onClickDecrement} buttonText={buttonTextTwo} />
      <LargeText text={`Current account is ${counter} `} />
    </div>
  );
};

export default App;