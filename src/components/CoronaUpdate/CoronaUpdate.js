import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CoronaUpdate = () => {
  // eslint-disable-next-line
  const [countryCorona, setCountryCorona] = useState({});
  // const { country, Active, Confirmed } = countryCorona;

  const { countryget } = useParams();
  useEffect(() => {
    const url = `https://api.covid19api.com/dayone/country/${countryget}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountryCorona(data[data.length - 1]))
      .catch((e) => {
        alert("Security Problem");
        console.log(e);
      });
  }, []);
  const date = new Date();

  return (
    <div className="text-center mt-5">
      <h2 className="p-5 m-3">Date: {date.toDateString()}</h2>
      <h1>Country Name: {countryCorona?.Country || "Update Not Found"}</h1>
      <h3>Active Case: {countryCorona?.Active || 0}</h3>
      <h3>Confirmed Case: {countryCorona?.Confirmed || 0}</h3>
      <h3>Deaths: {countryCorona?.Deaths || 0}</h3>
      <div>
        <p>
          <Link to="/home">Go back Home</Link>
        </p>

        <Link to="/corona">World Corona Update</Link>
      </div>
    </div>
  );
};

export default CoronaUpdate;
