import Header from "./../components/Header.tsx";
import { pv } from "financial";
import { useState } from "react";

export default function PV() {
  const [rate, setRate] = useState("");
  const [nper, setNper] = useState("");
  const [pmt, setPmt] = useState("");
  const [fv, setFv] = useState("");
  const [input, setInput] = useState("");

  const handleCalculatePMT = () => {
    let result = Math.round(
      pv(
        parseFloat(rate) / 12,
        parseFloat(nper) * 12,
        parseFloat(pmt),
        parseFloat(fv),
      ),
    );
    setInput(result.toString());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    alert("Copied to clipboard!");
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
        <h3>RESULT</h3>
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
