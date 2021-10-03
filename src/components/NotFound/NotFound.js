import React from "react";
import { Link } from "react-router-dom";
import image from "./CodePen-404-Page.gif";

const NotFound = () => {
  return (
    <div>
      <Link to="/home">
        <img src={image} alt="" className="w-100" />
      </Link>
    </div>
  );
};

export default NotFound;
