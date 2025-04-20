import React, { useContext, useEffect, useState } from 'react'
// import './AdminHeader.css'
import logo from "../../../../assets/img/logo.png";
import { Link, useNavigate } from 'react-router-dom';
// import { userContext } from '../Context/Context';
import {  toast } from 'react-toastify';
import { userContext } from '../../../Context/Context';
function Navbar() {

  const {User,setUser,setUserId}=useContext(userContext)
const nav=useNavigate()
  let userName=sessionStorage.getItem("userName")
  useEffect(()=>{

    if (!User) {
      
      setUser(userName)
    }
  },[])
  const handelLogout=()=>{
    if(window.confirm("Do you really want to logout?")){
      toast.success('Logout successfully!')
      setUser('')
      setUserId('')
      sessionStorage.clear()
    }
    

  }
  
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
                      <Link className="nav-link" id="navItem" to={'/admin'}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="navItem" to={'/admin/menu'}>
                        Menu
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id="navItem" to={'/admin/showorder'}>
                        Show Order
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link " to={'/admin/addmenu'} id="navItem">
                       Add menu
                      </Link>
                    </li>
                    {!!User ?<> <li className="nav-item">
                      <Link className="nav-link" id="navItem"  onClick={handelLogout}>
                        Logout
                        
                      </Link>
                    </li></>
                    :<><li className="nav-item">
                      <Link className="nav-link" id="navItem" to={'/login'}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="navItem" to={'/register'}>
                        Register
                      </Link>
                    </li></>}
                    
                    
                  </ul>
                
                </div>
              </div>
            </nav>
    </>
  )
}

export default Navbar
