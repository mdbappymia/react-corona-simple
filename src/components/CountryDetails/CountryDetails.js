import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState({});

  const { name, flags, capital, population, region } = countryDetails;
  let { country } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((data) => setCountryDetails(data[0]));
  }, []);
  return (
    <div className="text-center mt-5">
      <img src={flags?.png} alt="" />
      <h1>Name: {name?.common}</h1>
      <h2>Region: {region}</h2>
      <h2>Capital: {capital}</h2>
      <h4>Population: {population}</h4>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default CountryDetails;
