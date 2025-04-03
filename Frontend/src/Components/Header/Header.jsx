import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
function Header() {
  return (
    <header className=" shadow">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <div className="container-fluid">
          <a className="navbar-brand" id="logo" href="#">
            RedChili
            <img src={logo} alt="logo" id="logoImg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" id="navItem" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="navItem" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#" id="navItem">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="register">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex mx-3" role="search">
              <input
                className="form-control me-2 btn-outline-danger"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
   <div className=" d-flex justify-content-center align-items-center ">
   <h2 className="fw-bold" id="header-text">
            Delicious Meals <br /> <span className="text-orange">Delivered</span> to Your Door
          </h2>
          <p  id="header-para">
            Enjoy fresh, flavorful meals with the finest ingredients,<br /> delivered straight to your door, every time.
          </p>
   </div>
    </header>
  );
}

export default Header;
