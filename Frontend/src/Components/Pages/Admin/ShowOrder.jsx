import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
function ShowOrder() {
  const [Order, setOrder] = useState([]);
  const getOrder = async () => {
    console.log("get order");

    try {
      const result = await axios.get("http://localhost:3000/api/getOrder");
      const OrderDetaile = result.data.message;
      setOrder(OrderDetaile);
      // const getUser=await axios.get("http://localhost:3000/api/userInfoForOrder/")
      // console.log(getUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  // console.log(Order);
  
  return (
    <>
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12 ">
              <div className=" d-flex justify-content-center align-items-center ">
                <h2 className="fw-bold" id="header-text">
                  <span className="text-orange">Orders </span>
                </h2>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr className=" text-center">
                    <th scope="col">S No.</th>
                    <th scope="col">Order</th>
                    <th scope="col">User</th>
                    <th scope="col" >Order At</th>
                    <th scope="col" >Detaile Info</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Order.map((Order,index)=>(
                      <tr key={Order._id} className=" text-center">
                      <th scope="row">{index}</th>
                      <td>{Order.order}</td>
                      <td>{Order.user}</td>
                      <td>Time: <span className="text-danger px-3">{new Date(Order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span> Date :
                      <span className="text-danger px-3"> {new Date(Order.createdAt).toLocaleDateString('en-GB')}</span></td>

                    <td><button className="btn btn-success"><GrFormView size={30}/>View</button></td>
                    </tr>
                    ))
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShowOrder;
