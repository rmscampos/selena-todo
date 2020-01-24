import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";


const HomePage = props => {
  return (
    <div className="bg">
        <div className="container">
      <div class="card text-center">
        <div class="card-body">
          <h2 class="card-title">Being Selena</h2>
          <Link to='/add'>
          <button class="btn btn-primary">Create a Todo</button>
          </Link>

        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;