import React from "react";
import { Link, Redirect } from "react-router-dom";
import SigninForm from "./SigninForm";

function Signin() {
  return (
    <>
      <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div class="container-fluid ps-2 pe-0">
                <Link
                  to="/dashboard"
                  class="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                >
                  Product Reviews
                </Link>
                <button
                  class="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div class="collapse navbar-collapse" id="navigation">
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <Link
                        to="/dashboard"
                        class="nav-link d-flex align-items-center me-2 active"
                        aria-current="page"
                      >
                        <i class="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                        Dashboard
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/profile" class="nav-link me-2">
                        <i class="fa fa-user opacity-6 text-dark me-1"></i>
                        Profile
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/register" class="nav-link me-2">
                        <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                        Sign Up
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/signin" class="nav-link me-2">
                        <i class="fas fa-key opacity-6 text-dark me-1"></i>
                        Sign In
                      </Link>
                    </li>
                  </ul>
                  <ul class="navbar-nav d-lg-block d-none">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/product/material-dashboard"
                        class="btn btn-sm mb-0 me-1 bg-gradient-dark"
                      >
                        Free download
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
          </div>
        </div>
      </div>
      <SigninForm />
    </>
  );
}

export default Signin;
