import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const loggedIn = localStorage.getItem("access_token") ? true : false;
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};