import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import Home from "./pages/Home";
import BasicMath from "./pages/BasicMath";
import PMT from "./pages/PMT";
import FV from "./pages/FV";
import PV from "./pages/PV";
import NPER from "./pages/NPER";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalModal } from "./components/GlobalModal";

AOS.init();

function App() {
  return (
    <>
      <GlobalModal>
        <Router>
          {/* Routes, basically the routing page */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/basic-math" element={<BasicMath />}></Route>
            <Route path="/pmt" element={<PMT />}></Route>
            <Route path="/fv" element={<FV />}></Route>
            <Route path="/pv" element={<PV />}></Route>
            <Route path="/nper" element={<NPER />}></Route>
          </Routes>
        </Router>
      </GlobalModal>
    </>
  );
}

export default App;
