import React, { useRef, useState } from "react";
// import login from "../../assets/img/login.webp";
import axios from "axios";
// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function AddMenu() {
  
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: "",
    Price: "",
    Name:''
  });

  const handelFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handalForm = (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      Price: formData.password,
    };

    axios
      .post("http://localhost:3000/api/login", data)
      .then((data) => {
        const User = 'chandan'
        sessionStorage.setItem("User", JSON.stringify(User));
        // sessionStorage.setItem("User",User);
        // alert(data.data.message);
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
       
      })
      .catch((error) => {
        alert(error.response.data.message);
        setFormData({
          email: "",
          password: "",
        });
      });
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center ">
            <h1 className="fw-bold text-danger mt-3">Add Menu Item</h1>
          </div>
          <div className="row ">
          
            <div className="col-12  ">
              <form onSubmit={handalForm} className="row my-4  d-flex justify-content-center align-content-center">
                <div className=" col-md-7">
                  <label htmlFor="Name" className="form-label">
                    Dish Name
                  </label>
                  <input
                    onChange={handelFormData}
                    type="text"
                    className="form-control"
                    name="Name"
                    id="Name"
                    value={formData.email}
                    required
                  />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="Title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handelFormData}
                    type="text"
                    className="form-control"
                    name="Title"
                    id="Title"
                    value={formData.email}
                    required
                  />
                </div>

                <div className="col-md-7">
                  <label htmlFor="Password" className="form-label">
                    Price
                  </label>
                  <input
                    onChange={handelFormData}
                    name="Price"
                    type="text"
                    min={1}
                    className="form-control"
                    id="Password"
                    value={formData.password}
                    required
                  />
                </div>
                <div className="col-md-7">
                
                  <input
                    onChange={handelFormData}
                    name="file"
                    type="file"
                    className="form-control"
                    id="Password"
                    required
                  />
                </div>
                <div className="col-12 md-auto mt-2 d-flex justify-content-center align-content-center">
                  <button type="submit" className="btn btn-primary my-2 px-5 py-2">
                  Add
                  </button>
                  <br />
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMenu;
