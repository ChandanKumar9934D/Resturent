import React, { useRef, useState } from "react";
import login from "../../assets/img/login.webp";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  
  });

  const handelFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handalForm = (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    
    };

    axios
      .post("http://localhost:3000/api/login",data)
      .then((data) => {
        alert(data.data.message);
        setFormData({
          email: "",
          password: ""
         
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
        setFormData({
          email: "",
          password: ""
         
        });
      });
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center ">
            <h1 className="fw-bold text-danger mt-3">Login</h1>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6">
              <img src={login} alt="" />
            </div>
            <div className="col-12 col-md-6">
              <form onSubmit={handalForm} className="row my-4 ">
               
                <div className=" col-md-7">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={handelFormData}
                    type="email"
                    className="form-control"
                    name="email"
                    id="inputEmail4"
                    value={formData.email}
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
                    className="form-control"
                    id="Password"
                    value={formData.password}
                  />
                <div className="col-12 md-auto mt-2">
                </div>
              
                  <button type="submit" className="btn btn-primary">
                    login
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

export default Login;
