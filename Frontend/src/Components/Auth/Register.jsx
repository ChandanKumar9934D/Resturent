import React, { useRef } from "react";
import login from "../../assets/img/login.webp";
import axios from "axios";
function Register() {
  const userName=useRef()
  const email=useRef()
  const password=useRef()
  const address=useRef()
  const handalForm=(e)=>{
    e.preventDefault()
    console.log('data submit');
    const data={
      userName:userName.current.value,
      email:email.current.value,
      password:password.current.value,
      address:address.current.value
    }
    axios.post('http://localhost:3000/api/register',data)
    .then((data)=>{console.log(data.data.response)
      alert(data.data.response)
    }
    )
    .catch((error)=>{console.log(error.message)
      alert(error.message)
      
    }

    )

  }
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
                
              <form onSubmit={handalForm} className="row my-4 ">
                <div className=" col-md-7">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input type="text"
                  ref={userName}
                  
                  className="form-control" id="Name" />
                </div>
                <div className=" col-md-7">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                  ref={email}
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-7">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                  ref={password}
                    type="password"
                    className="form-control"
                    id="Password"
                  />
                </div>
                <div className="col-7">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    ref={address}
                    className="form-control"
                    id="Address"
                    
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
                    <option >jalandhar</option>
                    <option>punjab</option>
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
