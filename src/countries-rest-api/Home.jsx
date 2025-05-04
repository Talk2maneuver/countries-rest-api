import React from "react";
import { useState, useEffect } from "react";
import "../countries-rest-api/style.css";
import Countries from "../countries-rest-api/Countries";
import data from "../countries-rest-api/data.json";

function App(props) {
  const mode = props;

  const [countries, setCountries] = useState(data);
  const [search, setSearch] = useState("");
  const [regions, setRegions] = useState([]);
  const dataElements = countries.map((country, i) => (
    <Countries {...country} key={i} mode={props.darkMode} />
  ));

  //fitering region
  useEffect(() => {
    const regions = data.map((country) => country.region);
    setRegions([...new Set(regions)]);
  }, []);

  //searching for a country
  useEffect(() => {
    if (search.length > 0) {
      const searchedCountries = data.filter((country) =>
        country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setCountries(searchedCountries);
    } else setCountries(data);
  }, [search]);

  //region selector
  const regionHandler = (e) => {
    const region = e.target.value;
    if (region !== "All") {
      const filteredRegions = data.filter(
        (country) =>
          country.region.toLocaleLowerCase() === region.toLocaleLowerCase()
      );
      setCountries(filteredRegions);
    } else setCountries(data);
  };

  return (
    <>
      <div className={props.darkMode ? "dark" : "light"}>
        <div className="second-nav">
          <input
            type="text"
            placeholder="search for a country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={props.darkMode ? "dark-second" : "light-second"}
          />

          <select
            onChange={regionHandler}
            className={props.darkMode ? "dark-second" : "light-second"}
          >
            {regions.map((region, i) => (
              <option value={region} key={i}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={props.darkMode ? "dark" : "light"}>
        <div className="data-wrap">
          <div className="dataele">{dataElements}</div>
        </div>
      </div>
    </>
  );
}

export default App;
