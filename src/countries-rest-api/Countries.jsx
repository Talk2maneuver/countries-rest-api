import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Countries(country) {
  return (
    <>
      <div className="main-width">
        <div className="container">
          <Link to={`/detail?country=${country.name}`} className="link">
            <div className="main-card">
              <div className={country.mode ? "dark-second" : "light"}>
                <div className="country-card">
                  <div className="img-wrapper">
                    <img
                      src={country.flags.svg}
                      alt="country flag"
                      className="card-img"
                    />
                  </div>

                  <div className="card-info">
                    <h3 className="country-name">{country.name}</h3>
                    <ul className="main-list">
                      <li className="sub-list">
                        Population: {country.population}
                      </li>
                      <li className="sub-list">Region: {country.region}</li>
                      <li className="sub-list">Capital: {country.capital}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
