import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Homepage from "../Views/Pages/Homepage";

function Navbar() {
  const token = localStorage.getItem("access_token");
  //   console.log(Boolean(token));
  return (
    <>
      {/* Navbar */}
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          {/* <!-- Image Logo -->
                <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>  */}
          <Link to="/" element={Homepage} class="navbar-brand logo-text">
            Product Reviews
          </Link>
          <button
            class="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <HashLink smooth to="#features" class="nav-link">
                  Features
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink smooth to="#details" class="nav-link" href="#details">
                  Details
                </HashLink>
              </li>

              {token !== null && (
                <>
                  <li class="nav-item">
                    <Link to="/dashboard" class="nav-link" aria-current="page">
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/profile" class="nav-link" aria-current="page">
                      Profile
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {token == null && (
              <span class="nav-item">
                <Link to="/signin" class="btn-outline-sm">
                  Log in
                </Link>
              </span>
            )}
          </div>
        </div>
      </nav>
      {/* End Navbar*/}
    </>
  );
}

export default Navbar;
