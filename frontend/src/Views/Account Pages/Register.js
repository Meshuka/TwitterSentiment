import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import RegisterForm from "./RegisterForm";
function Register() {
  return (
    <>
      <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <Navbar />
          </div>
        </div>
      </div>
      <RegisterForm />
    </>
  );
}

export default Register;
