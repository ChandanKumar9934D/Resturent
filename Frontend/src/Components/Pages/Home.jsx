import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { BsCurrencyRupee } from "react-icons/bs";
// import card1 from ".././assets/img/card1.jpg";
import card1 from "../../assets/img/card1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [menuItems, setMenuitems] = useState([]);
  const fetchdata = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/menuitem");
      setMenuitems(data.data.response);
    } catch (error) {
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <header className=" shadow">
        <div className=" d-flex justify-content-center align-items-center ">
          <h2 className="fw-bold" id="header-text">
            Delicious Meals <br />{" "}
            <span className="text-orange">Delivered</span> to Your Door
          </h2>
          <p id="header-para">
            Enjoy fresh, flavorful meals with the finest ingredients,
            <br /> delivered straight to your door, every time.
          </p>
        </div>
      </header>
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12 ">
              <div className=" d-flex justify-content-center align-items-center ">
                <h2 className="fw-bold" id="header-text">
                  <span className="text-orange">Delicious Menu</span>
                </h2>
              </div>
              <div className="row">
             

                {menuItems.map((item) => (
                  <div className="col-12 col-sm-6 col-md-4 my-3" key={item._id}>
                    <div className="card" style={{ zindex: "-1" }}>
                      <img src={card1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-title">
                          <BsCurrencyRupee className=" mb-1" />
                          {item.price}
                        </h5>
                        <p className="card-text">{item.description}</p>
                        <Link to={'/about'} className="btn btn-danger">
                         More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
