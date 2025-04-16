import React, { useContext, useEffect, useId, useState } from "react";
import card1 from "../../assets/img/card1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import { userContext } from "../Context/Context";

function Menu() {
  const { userId } = useContext(userContext);
  const getUserToSession = sessionStorage.getItem("userId");
  const [userDetaile, setUserDetaile] = useState("");
  let [menuItems, setMenuitems] = useState([]);

  const fetchdata = async () => {
    if (!!userId) {
      setUserDetaile(userId);
    } else {
      setUserDetaile(getUserToSession);
    }
    console.log(userDetaile);

    try {
      const data = await axios.get("http://localhost:3000/api/showmenu");

      setMenuitems(data.data.response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    
    fetchdata();
  }, [userDetaile]);

  return (
    <>
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
                        <Link
                          to={`/order/` + userDetaile + `/${item._id}`}
                          className="btn btn-danger"
                        >
                          Order
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

export default Menu;
