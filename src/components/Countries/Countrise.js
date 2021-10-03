import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Country from "../Country/Country";
import "./Countries.css";

const Countrise = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("countries.JSON")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <Container className="countries-container mt-5">
        {countries.map((country) => (
          <Country key={country.name.common} country={country}></Country>
        ))}
      </Container>
    </>
  );
};

export default Countrise;
