import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom";

export default function Secondnav(props) {
  return (
    <div className="second-nav">
      <input type="text" placeholder="search for a country" />
      <select>
        {/* <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceanic</option> */}
      </select>
    </div>
  );
}
