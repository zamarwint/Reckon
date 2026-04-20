import Header from "./../components/Header";
import { useState } from "react";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "./../components/GlobalModalContext";

export default function BasicMath() {
  const { showModal } = useGlobalModalContext();

  // MODALS SUCCESS AND ERROR
  const successModal = (title: string, content: string) => {
    showModal(MODAL_TYPES.SUCCESS_MODAL, {
      title: title || "Success",
      content:
        content || "Your math expression has been processed successfully!",
    });
  };

  const errorModal = (title: string, content: string) => {
    showModal(MODAL_TYPES.ERROR_MODAL, {
      title: title || "Invalid Input",
      content:
        content ||
        "The expression you entered is mathematically invalid. Please check your syntax.",
    });
  };

  // STATE
  const [input, setInput] = useState("");

  // Input numbers to screen
  const handleNumbers = (value: string) => {
    setInput((prev) => prev + value);
  };

  // Input operators to screen
  const handleOperators = (value: string) => {
    setInput((prev) => {
      const operators = ["+", "-", "*", "/", "%", "**"];

      // Find if current input ends with any operator (longest first to catch '**')
      const sortedOperators = [...operators].sort(
        (a, b) => b.length - a.length,
      );
      for (const op of sortedOperators) {
        if (prev.endsWith(op)) {
          errorModal(
            "Invalid Input",
            "You can only use one operator at a time.",
          );
          return (prev.slice(0, -op.length) + value).toString();
        }
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
    if (!input) return;
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result !== undefined ? result.toString() : "0");
    } catch (err) {
      setInput("0");
      errorModal("Invalid Input", "Please check your syntax.");
    }
  };

  const handleCopy = () => {
    if (input) {
      navigator.clipboard.writeText(input);
      successModal("Success", "Copied to clipboard!");
    } else errorModal("An error occured", "Nothing to copy!");
  };

  // JSX OUTPUT
  return (
    <div className="main-container main1">
      <Header />
      <div
        className="container-body container-body1"
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
