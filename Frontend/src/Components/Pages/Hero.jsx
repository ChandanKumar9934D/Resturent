import React from "react";

const Hero = () => {
  return (
    <section className="container text-center mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h1 className="fw-bold">
            Delicious Meals <span className="text-orange">Delivered</span> to Your Door
          </h1>
          <p className="text-muted">
            Enjoy fresh, flavorful meals with the finest ingredients, delivered straight to your door, every time.
          </p>
          <button className="btn btn-primary me-3">Order Now</button>
          <button className="btn btn-outline-dark">Learn More</button>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/400" alt="Food Illustration" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
