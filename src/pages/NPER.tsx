import Header from "./../components/Header";
import { nper } from "financial";
import { useState, useRef } from "react";
import { ErrorModal, SuccessModal } from "../components/Dialogs";

export default function NPER() {
  // DIALOGS
  const errorDialogRef = useRef<HTMLDialogElement>(null);
  const successDialogRef = useRef<HTMLDialogElement>(null);

  const toggleError = () => {
    if (!errorDialogRef.current) return;
    errorDialogRef.current.open
      ? errorDialogRef.current.close()
      : errorDialogRef.current.showModal();
  };

  const toggleSuccess = () => {
    if (!successDialogRef.current) return;
    successDialogRef.current.open
      ? successDialogRef.current.close()
      : successDialogRef.current.showModal();
  };

  // STATE
  const [rate, setRate] = useState("");
  const [pmt, setPmt] = useState("");
  const [pv, setPv] = useState("");
  const [input, setInput] = useState("");

  const handleCalculateNPER = () => {
    try {
      if (!rate || !nper || !pv) toggleError();
      let result = Math.round(
        nper(parseFloat(rate) / 12, -parseFloat(pmt), parseFloat(pv)),
      );
      setInput(result.toString());
    } catch (err) {
      setInput("0");
      toggleError();
    }
  };

  const handleCopy = () => {
    if (input) {
      navigator.clipboard.writeText(input);
      toggleSuccess();
    } else {
      toggleError();
    }
  };

  return (
    <div className="main-container main2">
      <Header />
      <div
        className="container-body container-body2"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <h1>NPER</h1>
        <p>
          The NPER function returns the number of periods for an investment
          based on periodic, constant payments and a constant interest rate.
        </p>
        <strong>
          <p>
            <i>Example use case</i>
          </p>
        </strong>
        <p>
          If you only had $150/month <i>(PMT)</i> to pay towards a loan, how
          long would it take to pay-off a loan of $8,000 <i>(PV)</i> at 7%{" "}
          <i>(RATE)</i> annual interest? <br /> <br /> <strong>Answer:</strong>{" "}
          Over 64 months would be required to pay off the loan.
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
            value={pmt}
            onChange={(e) => setPmt(e.target.value)}
            placeholder="ENTER PMT"
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
        <h3>RESULT (MONTHS REQUIRED TO PAY OFF)</h3>
        <div className="screen result">{input || "0"}</div>
        <div className="bottom-buttons">
          <button
            className="btn calculate"
            onClick={() => handleCalculateNPER()}
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
      <ErrorModal ref={errorDialogRef} toggleDialog={toggleError} />
      <SuccessModal ref={successDialogRef} toggleDialog={toggleSuccess} />
    </div>
  );
}
