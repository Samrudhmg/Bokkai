import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "./Main";

const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="nav-part1">
          <div className="nav-gradient"></div>
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
              alt="nothing"
            ></img>
            <p>BookAI</p>
          </div>
        </div>

        <div className="nav-part2">
          <a href="/prices">Features</a>
          <a href="/prices">How It Works</a>
          <a href="/prices">Roadmap</a>
          <a href="/prices">API</a>
          <Link to="/prices">Price</Link>
          <a href="/">Models</a>

          <button>Login / Sign Up</button>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Navbar;
