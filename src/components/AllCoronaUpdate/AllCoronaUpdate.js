import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleCountryCorona from "../SingleCountryCorona/SingleCountryCorona";

const AllCoronaUpdate = () => {
  const [countrySummery, setCountrySummery] = useState({});
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => setCountrySummery(data))
      .catch((e) => console.log(e));
  }, [countrySummery]);
  const Countries = countrySummery.Countries || [];
  return (
    <Container>
      <div className="global">
        <h4>Global</h4>
        <p>New Confirmed: {countrySummery?.Global?.NewConfirmed || 0}</p>
        <p>Total Confirmed: {countrySummery?.Global?.TotalConfirmed || 0}</p>
        <p>New Deaths: {countrySummery?.Global?.NewDeaths || 0}</p>
        <p>Total Deaths: {countrySummery?.Global?.TotalDeaths || 0}</p>
      </div>
      <div className="country-container">
        {Countries.map((country) => (
          <SingleCountryCorona
            key={country.ID}
            country={country}
          ></SingleCountryCorona>
        ))}
      </div>
    </Container>
  );
};
export default AllCoronaUpdate;
