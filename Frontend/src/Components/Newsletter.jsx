import React from "react";

const Newsletter = () => {
  return (
    <section className="container text-center my-5 p-5 bg-light rounded">
      <h3>Subscribe to <span className="text-orange">Our Newsletter</span></h3>
      <p className="text-muted">Subscribe now to receive the latest offers and updates.</p>
      <div className="d-flex justify-content-center">
        <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
