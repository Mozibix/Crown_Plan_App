import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/crown-logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar p-2 navbar-expand-lg navbar-dark  bg-white">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <a className="logo-link" href="/">
            Cro &nbsp;
            <span className="logo">
              <img src={logo} alt="logo" />
            </span>{" "}
            n<span className="red-text">Plan</span>
          </a>
        </a>

        <div className="links">
          <ul className="flex_links">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#review">
              <li>Reviews</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
          </ul>
        </div>

        <div className="button-sec">
          <button className="btn" onClick={() => navigate("/create-employee")}>
            BOOK SERVICE{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
