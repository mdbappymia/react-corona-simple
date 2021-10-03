import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Country.css";
import { Link, useHistory } from "react-router-dom";

const Country = (props) => {
  // console.log(props.country);
  let history = useHistory();
  const { name, flags, population } = props.country;
  // const handleDetails = (country) => {
  //   history.push("/details");
  // };

  const handleCorona = () => {
    const newName = name.common.replace(" ", "-");
    console.log(newName);
    history.push(`/corona-single/${newName}`);
  };
  return (
    <>
      <Card>
        <Card.Img className="country-flag" variant="top" src={flags.png} />
        <Card.Body className="country-card">
          <Card.Title>{name.common}</Card.Title>
          <Card.Text>Population: {population}</Card.Text>
          <div className="d-flex justify-content-between">
            <Link to={`/details/:${name.common}`}>
              <Button variant="primary">Details</Button>
            </Link>
            <Button onClick={handleCorona} variant="primary">
              Corona Update
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Country;
