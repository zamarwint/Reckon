import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  // DARK / LIGHT THEME IMPLEMENTATION
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // RENDERED JSX
  return (
    <>
      <nav className="navigation">
        <div className="navbar-left">
          <h1>Reckon</h1>
        </div>
        <div className="navbar-center">
          <Link
            className="link"
            to="/"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Home
          </Link>
          <Link
            className="link"
            to="/basic-math"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Basic Math
          </Link>
          <Link
            className="link"
            to="/pmt"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            PMT
          </Link>
          <Link
            className="link"
            to="/fv"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            FV
          </Link>
          <Link
            className="link"
            to="/pv"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            PV
          </Link>
          <Link
            className="link"
            to="/nper"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            NPER
          </Link>
        </div>
        <div
          className="navbar-right"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          {theme === "light" ? (
            <FaSun className="theme-icon sun" />
          ) : (
            <FaMoon className="theme-icon moon" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
