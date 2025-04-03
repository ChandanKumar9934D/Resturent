import React from "react";
import login from "../../assets/img/login.webp";
function Register() {
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
                
              <form className="row my-4 ">
                <div className=" col-md-7">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-7">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-7">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="col-md-7">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-7">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
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
