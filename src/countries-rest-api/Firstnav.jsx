import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom";

export default function Firstnav(mode) {
  // console.log(mode);
  return (
    <nav className={mode.darkMode ? "dark-second" : "light-second"}>
      <div className="first-nav">
        <h2 className="title">Where in the world?</h2>
        <div className="btn-toggle" onClick={mode.toggleMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
          </svg>
          {mode.darkMode ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </nav>
  );
}
