import React, { useContext, useRef, useState } from "react";
import login from "../../assets/img/login.webp";
import axios from "axios";
import { userContext } from "../Context/Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate=useNavigate()
  const {User,setUser,setUserId}=useContext(userContext)
  if(!!User){
    navigate('/')
      }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    address: "",
    contact: "",
    state: "",
  });
  const cities = [
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Mohali",
    "Pathankot",
    "Hoshiarpur",
    "Moga",
    "Barnala",
  ];
  const handelFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handalForm = (e) => {
    e.preventDefault();
    const data = {
      userName: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address + " ," + formData.city + " ," + formData.state,
      contact: Number(formData.contact),
    };

    axios
      .post("http://localhost:3000/api/register", data)
      .then((data) => {
        sessionStorage.setItem("userId",data.data.user);
        sessionStorage.setItem("userName",formData.name);
       
        setUserId(data.data.user)
        setUser(formData.name);
        setFormData({
          name: "",
          email: "",
          password: "",
          city: "",
          address: "",
          contact: "",
          state: "",
        });
      
        toast.success("User Register successfully!")
        console.log(userType,typeof userType);
        
        
      })
      .catch((error) => {
        toast.error(error.response.data.response);
      });
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center ">
            <h1 className="fw-bold text-danger mt-3">Register</h1>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6">
              <img src={login} alt="" />
            </div>
            <div className="col-12 col-md-6">
              <form onSubmit={handalForm} className="row my-4" method="post" action={'api/register'}>
                <div className=" col-md-7">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={handelFormData}
                    name="name"
                    className="form-control"
                    id="Name"
                    required
                    value={formData.name}
                  />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={handelFormData}
                    type="email"
                    className="form-control"
                    required
                    name="email"
                    id="inputEmail4"
                    value={formData.email}
                  />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="Contact" className="form-label">
                    Contact No.
                  </label>
                  <input
                    onChange={handelFormData}
                    type="text"
                    maxLength="10"
                    pattern="\d{10}"
                    required
                    className="form-control"
                    name="contact"
                    id="Contact"
                    value={formData.contact}
                  />
                </div>
                <div className="col-md-7">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={handelFormData}
                    name="password"
                    type="password"
                    required
                    className="form-control"
                    id="Password"
                    value={formData.password}
                  />
                </div>
                <div className="col-md-7">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <select
                    id="inputCity"
                    required
                    onChange={handelFormData}
                    name="city"
                    className="form-select"
                    value={formData.city}
                  >
                    <option disabled selected>
                      select
                    </option>
                    {cities.map((citie, index) => (
                      <option key={index} value={citie}>
                        {citie}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-7">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select
                    value={formData.state}
                    id="inputState"
                    name="state"
                    onChange={handelFormData}
                    required
                    className="form-select"
                  >
                    <option value="" disabled selected>
                      Select State
                    </option>
                    <option value="punjab">Punjab</option>
                   
                  </select>
                </div>
                <div className="col-7">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    value={formData.address}
                    required
                    name="address"
                    onChange={handelFormData}
                    type="text"
                    className="form-control"
                    id="Address"
                  />
                </div>
                <div className="col-12 md-auto mt-2">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
