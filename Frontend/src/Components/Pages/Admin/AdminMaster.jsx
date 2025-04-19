import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader/AdminHeader";
import Footer from "../../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminMaster() {
  const nav = useNavigate();
  let[userType,setUserType]=useState('')
  useEffect(() => {
     const myuserType = String(sessionStorage.getItem("userType"));
     setUserType(myuserType)
  if(!!userType){
    if (userType !== "2") {
      nav("/");
      toast.error("invalid Access !!!!!!")
      return;
      
    }
  }
  },[userType]);

  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
}
export default AdminMaster;
