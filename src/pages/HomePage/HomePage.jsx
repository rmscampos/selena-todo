import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";


const HomePage = props => {
  return (
    <div className="bg">
        <div className="container">
      <div class="card text-center">
        <div class="card-body">
          {/* <Link to='/add'>
          <button class="btn">Create a Todo</button>
          </Link> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;