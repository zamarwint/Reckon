import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";

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

  // CHECK TO SEE WHICH PAGE USER IS ON SO THAT IT CAN SET THE ACTIVE LINK IN NAVBAR
  const location = useLocation();

  // TOGGLE SIDEBAR
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // RENDERED JSX
  return (
    <>
      <nav className="navigation">
        <div className="navbar-left">
          <Link to="/" className="logo">
            Reckon
          </Link>
        </div>
        {/* SIDEBAR */}
        <div className={isSidebarVisible ? "sidebar visible" : "sidebar"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill={theme === "light" ? "#000" : "#fff"}
            className="close-sidebar"
            onClick={toggleSidebar}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <Link
            className={location.pathname === "/" ? "link active" : "link"}
            to="/"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/basic-math" ? "link active" : "link"
            }
            to="/basic-math"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Basic Math
          </Link>
          <Link
            className={location.pathname === "/pmt" ? "link active" : "link"}
            to="/pmt"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            PMT
          </Link>
          <Link
            className={location.pathname === "/fv" ? "link active" : "link"}
            to="/fv"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            FV
          </Link>
          <Link
            className={location.pathname === "/pv" ? "link active" : "link"}
            to="/pv"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            PV
          </Link>
          <Link
            className={location.pathname === "/nper" ? "link active" : "link"}
            to="/nper"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            NPER
          </Link>
        </div>
        <div className="navbar-center">
          <Link
            className={location.pathname === "/" ? "link active" : "link"}
            to="/"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/basic-math" ? "link active" : "link"
            }
            to="/basic-math"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Basic Math
          </Link>
          <Link
            className={location.pathname === "/pmt" ? "link active" : "link"}
            to="/pmt"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            PMT
          </Link>
          <Link
            className={location.pathname === "/fv" ? "link active" : "link"}
            to="/fv"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            FV
          </Link>
          <Link
            className={location.pathname === "/pv" ? "link active" : "link"}
            to="/pv"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            PV
          </Link>
          <Link
            className={location.pathname === "/nper" ? "link active" : "link"}
            to="/nper"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            NPER
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill={theme === "light" ? "#000" : "#fff"}
            className="sidebar-toggle"
            onClick={toggleSidebar}
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
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
