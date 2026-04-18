import Header from "./../components/Header.tsx";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library, type IconProp } from "@fortawesome/fontawesome-svg-core";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, far, fab);

export default function BasicMath() {
  // // @ts-ignore
  // const myIcon: IconProp = "fa-solid fa-sun";
  const [input, setInput] = useState("");

  // Input numbers to screen
  const handleNumbers = (value: any) => {
    setInput((prev) => prev + value);
  };

  // Input operators to screen
  const handleOperators = (value: any) => {
    setInput((prev) => {
      const operators = ["+", "-", "*", "/", "%", "**"];
      const lastChar = prev.slice(-1);
      if (operators.includes(lastChar)) {
        return (prev.slice(0, -1) + value).toString();
      }
      return (prev + value).toString();
    });
  };

  // Clears the screen
  const handleClear = () => {
    setInput("");
  };

  // Deletes the last value from screen
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Calculates the answer
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("An error occured.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    alert("Copied to clipboard!");
  };

  // JSX OUTPUT
  return (
    <div className="main-container main1">
      <Header />
      <div
        className="container container1"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div className="screen">{input || "0"}</div>
        <div className="calculator">
          <button className="btn clear" onClick={handleClear}>
            clear
          </button>
          <button className="btn delete" onClick={handleDelete}>
            del
          </button>
          <button
            className="btn operand multiply-button"
            onClick={() => handleOperators("*")}
          >
            x
          </button>
          <button
            className="btn operand divide-button"
            onClick={() => handleOperators("/")}
          >
            /
          </button>

          <button
            className="btn number number1"
            onClick={() => handleNumbers("1")}
          >
            1
          </button>
          <button
            className="btn number number2"
            onClick={() => handleNumbers("2")}
          >
            2
          </button>
          <button
            className="btn number number3"
            onClick={() => handleNumbers("3")}
          >
            3
          </button>
          <button
            className="btn operand plus-button"
            onClick={() => handleOperators("+")}
          >
            +
          </button>

          <button
            className="btn number number4"
            onClick={() => handleNumbers("4")}
          >
            4
          </button>
          <button
            className="btn number number5"
            onClick={() => handleNumbers("5")}
          >
            5
          </button>
          <button
            className="btn number number6"
            onClick={() => handleNumbers("6")}
          >
            6
          </button>
          <button
            className="btn operand minus-button"
            onClick={() => handleOperators("-")}
          >
            -
          </button>

          <button
            className="btn number number7"
            onClick={() => handleNumbers("7")}
          >
            7
          </button>
          <button
            className="btn number number8"
            onClick={() => handleNumbers("8")}
          >
            8
          </button>
          <button
            className="btn number number9"
            onClick={() => handleNumbers("9")}
          >
            9
          </button>

          <button className="btn dot" onClick={() => handleNumbers(".")}>
            .
          </button>

          <button
            className="btn number number0"
            onClick={() => handleNumbers("0")}
          >
            0
          </button>
          <button
            className="btn operand exponent-button"
            onClick={() => handleOperators("**")}
          >
            x2
          </button>
          <button
            className="btn operand modulus-button"
            onClick={() => handleOperators("%")}
          >
            %
          </button>
          <button
            className="btn equal calculate-button"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
        <button className="btn copy1 copy-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}
