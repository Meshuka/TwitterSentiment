import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthenticatedRoute = () => {
  const loggedIn = localStorage.getItem("authToken") ? true : false;
  // console.log("loggedIn", loggedIn);
  return !loggedIn ? <Outlet /> : <Navigate to="/" />;
};
