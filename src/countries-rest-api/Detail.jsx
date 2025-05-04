import React from "react";
import { Link } from "react-router-dom";
import data from "../countries-rest-api/data.json";

export default function Detail(mode) {
  const searchParams = new URLSearchParams(window.location.search);
  const countryParam = searchParams.get("country");
  const countryArray = data.find((country) =>
    country.name.includes(countryParam)
  );

  const countryData = countryArray;

  return (
    <>
      <div className={mode.darkMode ? "dark" : "light"}>
        <div className="detail-wrapper">
          <Link to="/">
            <button className="btn-back">Back</button>
          </Link>
          <div className="detail-card">
            <img src="../felix.PNG" alt="country flag" className="detail-img" />
            <div className={mode.darkMode ? "dark" : "light"}>
              <div className="detail-list">
                <h3 className="name-country"> Country {countryData?.name}</h3>

                <div className="detail-info">
                  <ul>
                    <li>Native Name: {countryData?.region}</li>
                    <li>Population: {countryData?.population}</li>
                    <li>Region: {countryData?.region}</li>
                    <li>Sub Region: {countryData?.region}</li>
                    <li>Capital: {countryData?.capital}</li>
                  </ul>
                  <ul>
                    <li>Top Level Domain: {countryData?.region}</li>
                    <li>Currencies: {countryData?.population}</li>
                    <li>Languages: {countryData?.region}</li>
                  </ul>
                </div>

                <div className="border-counries">
                  {countryData.borders && (
                    <span className="border-text">Border Countries: </span>
                  )}
                  {countryData.borders &&
                    countryData.borders.map((border, i) => (
                      <button className="btn-border" key={i}>
                        {border}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
