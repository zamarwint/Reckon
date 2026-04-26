import Header from "./../components/Header";
import { fv } from "financial";
import { useState, useRef } from "react";
import { ErrorModal, SuccessModal } from "../components/Dialogs";

export default function FV() {
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
  const [nper, setNper] = useState("");
  const [pmt, setPmt] = useState("");
  const [pv, setPv] = useState("");
  const [input, setInput] = useState("");

  const handleCalculateFV = () => {
    try {
      if (!rate || !nper || !pv || !fv) toggleError();
      let result = Math.round(
        fv(
          parseFloat(rate) / 12,
          parseFloat(nper) * 12,
          -parseFloat(pmt),
          -parseFloat(pv),
        ),
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
        <h1>FV</h1>
        <p>
          The FV function calculates the future value of an investment based on
          a constant interest rate.
        </p>
        <strong>
          <p>
            <i>Example use case</i>
          </p>
        </strong>
        <p>
          What is the future value after 10 years <i>(NPER)</i> of saving $100{" "}
          <i>(PV)</i> now, with an additional monthly savings of $100
          (payment...PMT). Assume the interest rate <i>(RATE)</i> is 5%
          (annually) compounded monthly? <br /> <br /> <strong>Answer:</strong>{" "}
          By convention, the negative sign represents cash flow out (i.e. money
          not available today). Thus, saving $100 a month at 5% annual interest
          leads to $15,692.93 available to spend in 10 years.
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
        <h3>RESULT (FUTURE WORTH)</h3>
        <div className="screen result">{input || "0"}</div>
        <div className="bottom-buttons">
          <button className="btn calculate" onClick={() => handleCalculateFV()}>
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
