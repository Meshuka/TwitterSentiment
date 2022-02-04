import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SigninForm from "./SigninForm";

function Signin() {
  return (
    <>
    <header class="ex-header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1">
                        <h1 class="text-center">Log In</h1>
                    </div> 
                </div> 
            </div> 
        </header> 
            <Navbar />
      <SigninForm />
    </>
  );
}

export default Signin;
