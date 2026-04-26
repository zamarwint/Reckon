import Header from "./../components/Header";
import { pv } from "financial";
import { useState, useRef } from "react";
import { ErrorModal, SuccessModal } from "../components/Dialogs";

export default function PV() {
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
  const [fv, setFv] = useState("");
  const [input, setInput] = useState("");

  const handleCalculatePV = () => {
    try {
      if (!rate || !nper || !pv || !fv) toggleError();
      let result = Math.round(
        pv(
          parseFloat(rate) / 12,
          parseFloat(nper) * 12,
          -parseFloat(pmt),
          parseFloat(fv),
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
        <h1>PV</h1>
        <p>
          The PV function calculates the present value of a loan or an
          investment, based on a constant interest rate.
        </p>
        <strong>
          <p>
            <i>Example use case</i>
          </p>
        </strong>
        <p>
          What is the present value (e.g., the initial investment) of an
          investment that needs to total $15692.93 <i>(FV)</i> after 10 years{" "}
          <i>(NPER)</i> of saving $100 <i>(PMT)</i> every month? Assume the
          interest rate <i>(RATE)</i> is 5% (annually) compounded monthly.{" "}
          <br /> <br /> <strong>Answer:</strong> By convention, the negative
          sign represents cash flow out (i.e., money not available today). Thus,
          to end up with $15,692.93 in 10 years saving $100 a month at 5% annual
          interest, one's initial deposit should also be $100.
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
            value={fv}
            onChange={(e) => setFv(e.target.value)}
            placeholder="ENTER FV"
          />
        </div>
        <h3>RESULT (INITIAL DEPOSIT)</h3>
        <div className="screen result">{input || "0"}</div>
        <div className="bottom-buttons">
          <button className="btn calculate" onClick={() => handleCalculatePV()}>
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
