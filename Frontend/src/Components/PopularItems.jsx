import React from "react";

const PopularItems = () => {
  const items = [
    { name: "Four Cheese Pizza", desc: "Free Delivery for first order", img: "https://via.placeholder.com/150" },
    { name: "Margherita Pizza", desc: "Pizza 10% discount on Sunday", img: "https://via.placeholder.com/150" },
    { name: "Hot Dog", desc: "Get 20% off on your order", img: "https://via.placeholder.com/150" },
    { name: "Burger King", desc: "Free Delivery for first order", img: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="container mt-5">
      <h2 className="fw-bold">Our <span className="text-orange">Popular</span> Items</h2>
      <div className="row mt-3">
        {items.map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="card shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.desc}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
