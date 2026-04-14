import { useState } from "react";
import { Button } from "./components/Buttom"; 
import { Display } from "./components/Display";
import { ResultDis } from "./components/ResultDis";
import { Add } from "./logic/Add";
import { Div } from "./logic/Div";
import { Sub } from "./logic/Sub";
import { Mult } from "./logic/Mult";
import './style.css';

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleBtnClick = (text: string) => {
    if (text === "=") {
      if (expression === "") return;

      let tokens: Array<string | number> = []; 
      let currentNumber = "";

      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '+' || char === '-' || char === '*' || char === '/') {
          if (currentNumber !== "") {
            tokens.push(Number(currentNumber));
            currentNumber = "";
          }
          tokens.push(char);
        } else {
          currentNumber += char;
        }
      }
      
      if (currentNumber !== "") {
        tokens.push(Number(currentNumber));
      }

      while (tokens.includes('*') || tokens.includes('/')) {
        let index = tokens.findIndex(t => t === '*' || t === '/');
        
        let num1 = Number(tokens[index - 1]);
        let operator = tokens[index];
        let num2 = Number(tokens[index + 1]);
        let res = 0;

        if (operator === '*') res = Mult(num1, num2);
        if (operator === '/') res = Div(num1, num2);

        tokens.splice(index - 1, 3, res);
      }

      while (tokens.includes('+') || tokens.includes('-')) {
        let index = tokens.findIndex(t => t === '+' || t === '-');
        
        let num1 = Number(tokens[index - 1]);
        let operator = tokens[index];
        let num2 = Number(tokens[index + 1]);
        let res = 0;

        if (operator === '+') res = Add(num1, num2);
        if (operator === '-') res = Sub(num1, num2);

        tokens.splice(index - 1, 3, res);
      }

      const finalResult = Number(tokens[0]);
      
      if (Number.isNaN(finalResult)) {
        setResult("Помилка (ділення на 0)");
      } else {
        setResult(String(finalResult));
      }

    } else if (text === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + text);
    }
  };

  return (
    <div className="calculator">
      <ResultDis result={result} />
      <Display value={expression} />
      
      <div className="keypad">
        <Button text="1" param="Number" onClick={handleBtnClick} />
        <Button text="2" param="Number" onClick={handleBtnClick} />
        <Button text="3" param="Number" onClick={handleBtnClick} />
        <Button text="+" param="Operation" onClick={handleBtnClick} />
        <Button text="4" param="Number" onClick={handleBtnClick} />
        <Button text="5" param="Number" onClick={handleBtnClick} />
        <Button text="6" param="Number" onClick={handleBtnClick} />
        <Button text="-" param="Operation" onClick={handleBtnClick} />
        <Button text="7" param="Number" onClick={handleBtnClick} />
        <Button text="8" param="Number" onClick={handleBtnClick} />
        <Button text="9" param="Number" onClick={handleBtnClick} />
        <Button text="*" param="Operation" onClick={handleBtnClick} />
        <Button text="C" param="ClearDis" onClick={handleBtnClick} />
        <Button text="0" param="Number" onClick={handleBtnClick} />
        <Button text="/" param="Operation" onClick={handleBtnClick} />
        <Button text="=" param="Operation" onClick={handleBtnClick} />
      </div>
    </div>
  );
}

export default App;