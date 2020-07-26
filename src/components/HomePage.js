import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Anand's Foundation</h1>
      <p>
        A place to learn React, Node and become a successfull Fullstack developer!
        <span role="img" aria-label="Victory">
          ✌
        </span>
      </p>
      <Link to="about" className="btn btn-info">
        About
      </Link>
    </div>
  );
};

export default HomePage;
