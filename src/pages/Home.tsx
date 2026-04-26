import Header from "./../components/Header";
import { Link } from "react-router-dom";

// Scroll to Element within the same page
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function scrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      lastHash.current = "";
    }
  }, [location]);

  return null;
}

const Home = () => {
  scrollToAnchor();

  return (
    <div className="main-content">
      <Header />
      <div className="hero">
        <h1 data-aos="fade-down" data-aos-duration="500">
          Reckon Calculators
        </h1>
        <p data-aos="fade-down" data-aos-duration="1000">
          Your one stop hub for math and investment calculations. <br />{" "}
          <i>What would you like to calculate today?</i>
        </p>
        <div className="buttons" data-aos="fade-down" data-aos-duration="1500">
          <Link to="/basic-math" className="btn btn1">
            Get Started
          </Link>
          <Link to="#learn-more" className="btn btn2">
            Learn More
          </Link>
        </div>
      </div>
      <div
        className="more-information more-info1"
        id="learn-more"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>What is Reckon?</h1>
        <p>
          Reckon is a web-based calculator application with basic math
          (addition, subtraction, multiplication, and division) and investment
          functions (PMT (payment), NPER (number of periods), PV (present value)
          and FV (future value)).
        </p>
        <p>
          <i>
            <strong>Scroll some more to continue learning</strong>
          </i>
        </p>
      </div>
      <div
        className="more-information more-info2"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>How does Reckon work?</h1>
        <p>It's simple.</p>
        <ol>
          <li>
            As you open the application, you are presented with the basic math
            and investment functions. Choose one.
          </li>
          <li>
            If you chose basic math, you input your values and calculate. If you
            chose an investment function, you input the respective values based
            on your knowledge of investment calculation. A definition of the
            function will be on screen.
          </li>
          <li>
            When finished, click the "Calculate" button and the result will
            appear.
          </li>
        </ol>

        <h1>Try Reckon today!</h1>
        <p>
          Give it a shot! Use it to calculate payments, investments, whatever
          you need.
        </p>
        <Link to="/basic-math" className="btn btn3">
          Try Reckon
        </Link>
      </div>
    </div>
  );
};

export default Home;
