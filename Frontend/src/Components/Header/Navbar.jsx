import React from 'react'
import './Header.css'
import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav" style={{zIndex:"999"}}>
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
                      <Link className="nav-link" id="navItem" to={'/'}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id="navItem" to={'/about'}>
                        About
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link " href="#" id="navItem">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="navItem" to={'/register'}>
                        Register
                      </Link>
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
    </>
  )
}

export default Navbar
