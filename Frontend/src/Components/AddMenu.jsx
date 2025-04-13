import React, { useRef, useState } from "react";
// import login from "../../assets/img/login.webp";
import axios from "axios";
// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function AddMenu() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    title: "",
    atAvailable: true,
  });

  const handelFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handalForm = (e) => {
    e.preventDefault();
    const data = {
      description: formData.description,
      price: formData.price,
      title: formData.title,
      atAvailable: true,
    };

    axios
      .post("http://localhost:3000/api/addmenu", data)
      .then((data) => {
        console.log(data);

        setFormData({
          description: "",
          price: "",
          title: "",
        });
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);

        // alert(error.response.data.message);
        setFormData({
          description: "",
          price: "",
          title: "",
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
              <form
                onSubmit={handalForm}
                className="row my-4  d-flex justify-content-center align-content-center"
              >
                <div className=" col-md-7">
                  <label htmlFor="Title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handelFormData}
                    type="text"
                    className="form-control"
                    name="title"
                    id="Title"
                    value={formData.title}
                    required
                  />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={handelFormData}
                    value={formData.description}
                    required
                  ></textarea>
                </div>
                <div className="col-md-7">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    onChange={handelFormData}
                    name="price"
                    type="text"
                    className="form-control"
                    id="price"
                    value={formData.price}
                    required
                  />
                </div>
                {/* <div className="col-md-7">
                
                  <input
                    onChange={handelFormData}
                    name="file"
                    type="file"
                    className="form-control"
                    id="Password"
                    required
                  />
                </div> */}
                <div className="col-12 md-auto mt-2 d-flex justify-content-center align-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary my-2 px-5 py-2"
                  >
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
