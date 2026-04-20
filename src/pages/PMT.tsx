import Header from "./../components/Header";
import { pmt } from "financial";
import { useState } from "react";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "./../components/GlobalModalContext";

export default function PMT() {
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
  const [rate, setRate] = useState("");
  const [nper, setNper] = useState("");
  const [pv, setPv] = useState("");
  const [input, setInput] = useState("");

  const handleCalculatePMT = () => {
    try {
      if (!rate || !nper || !pv)
        errorModal("An error occured", "Please input all values.");
      let result = Math.round(
        pmt(parseFloat(rate) / 12, parseFloat(nper) * 12, -parseFloat(pv)),
      );
      setInput(result.toString());
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

  return (
    <div className="main-container main2">
      <Header />
      <div
        className="container-body container-body2"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <h1>PMT</h1>
        <p>
          The PMT function calculates the payment for a loan based on constant
          payments and a constant interest rate.
        </p>
        <strong>
          <p>
            <i>Example use case</i>
          </p>
        </strong>
        <p>
          What is the monthly payment needed to pay off a $200,000 loan{" "}
          <i>(PV)</i> in 15 years <i>(NPER)</i> at an annual interest rate of
          7.5%
          <i>(RATE)</i> ? <br /> <br />
          <strong>Answer:</strong> In order to pay-off (i.e., have a
          future-value of 0) the $200,000 obtained today, a monthly payment of
          $1,854.02 would be required. Note that this example illustrates usage
          of fv having a default value of 0.
        </p>
        <div className="pmt-inputs">
          <input
            type="number"
            name=""
            id=""
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="ENTER RATE"
          />
          <input
            type="number"
            name=""
            id=""
            value={nper}
            onChange={(e) => setNper(e.target.value)}
            placeholder="ENTER NPER"
          />
          <input
            type="number"
            name=""
            id=""
            value={pv}
            onChange={(e) => setPv(e.target.value)}
            placeholder="ENTER PV"
          />
        </div>
        <h3>RESULT (AMOUNT PER MONTH)</h3>
        <div className="screen result">{input || "0"}</div>
        <div className="bottom-buttons">
          <button
            className="btn calculate"
            onClick={() => handleCalculatePMT()}
          >
            Calculate
          </button>
          <button className="btn reset-button" onClick={() => setInput("")}>
            Reset
          </button>
          <button className="btn copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
