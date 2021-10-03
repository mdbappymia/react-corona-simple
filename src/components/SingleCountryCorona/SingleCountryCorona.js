import React from "react";
import { Link } from "react-router-dom";

const SingleCountryCorona = (props) => {
  const { Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths } =
    props.country;

  return (
    <div className="border p-3 border-dark">
      <h4>Country Name: {Country || 0}</h4>
      <p>New Confirmed: {NewConfirmed || 0}</p>
      <p>Total Confirmed: {TotalConfirmed || 0}</p>
      <p>New Deaths: {NewDeaths || 0}</p>
      <p>Total Deaths: {TotalDeaths || 0}</p>
      <Link to={`/corona-single/${Country}`}>Details</Link>
    </div>
  );
};

export default SingleCountryCorona;
