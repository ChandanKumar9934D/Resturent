import React from "react";
import grilledChicken from '../../assets/img/grilled-chicken.jpg'
// import card1 from "../assets/img/card1.jpg";


const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={grilledChicken} alt="Grilled Chicken" className="img-fluid rounded shadow " />
        </div>
        <div className="col-md-6">
          <h2>
            Inspired by Taste, Built on <span className="text-danger">Quality</span>
          </h2>
          <ul className="list-unstyled">
            <li>✅ Fresh Food, Fast Delivery</li>
            <li>✅ Taste the Freshness in Every Bite</li>
            <li>✅ 10% off every Sunday for all food items</li>
          </ul>
          <button className="btn btn-outline-danger">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
