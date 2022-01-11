import React, { useState, useEffect } from "react";
import { Link, Redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    user_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const { user_name, email, password, password2 } = inputData;

  const inputHanlder = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
      error: false,
    });
  };

  const validationHanlder = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputData.user_name) {
      errors.user_name = "Username is required";
    }
    if (!inputData.email) {
      errors.email = "Email is required";
    } else if (!regex.test(inputData.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!inputData.password) {
      errors.password = "Both password are required";
    } else if (inputData.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (inputData.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!inputData.password2) {
      errors.password2 = "Both password are required";
    } else if (inputData.password2.length < 4) {
      errors.password2 = "Password must be more than 4 characters";
    } else if (inputData.password2.length > 10) {
      errors.password2 = "Password cannot exceed more than 10 characters";
    }

    setErrors(errors);
    return errors;
  };

  const storeDataHandler = () => {
    // console.log(errors);
    // if (Object.keys(errors).length === 0) {
    // console.log("error not actually zerp");
    axiosInstance
      .post(
        "user/register/",
        {
          user_name: user_name,
          email: email,
          password: password,
          password2: password2,
        }
        // {
        //   validateStatus: (status) => {
        //     return status < 500;
        //   },
        // }
      )
      .then((res) => {
        console.log("in if");
        if (res.status === 400) {
          console.log("res-data", res.data);
          setErrors({
            ...errors,
            user_name: res.data.user_name,
            email: res.data.email,
            password: res.data.password,
          });
        } else {
          console.log("in else");
          alert("User created");
          console.log("Sign up done user data: ");
          console.log(user_name, email, password, password2);
          navigate("/signin");
          // notify("User created");
          console.log(res);
          console.log(res.data);
        }
        setErrors({
          ...errors,
          user_name: res.data.user_name,
          email: res.data.email,
          password: res.data.password,
        });
      })
      .catch((e) => {
        console.log("error", e.message);
        // notify("Error");
      });
    // } else {
    //   console.log("there is some error", errors);
    //   // alert(errors.data);
    //   navigate("/register");
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setErrors(validationHanlder(inputData));
    storeDataHandler();
  };

  return (
    <main class="main-content  mt-0">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                  {" "}
                  {/* style="background-image: url('../assets/img/illustrations/illustration-signup.jpg'); background-size: cover;"> */}
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                <div class="card card-plain">
                  <div class="card-header">
                    <h4 class="font-weight-bolder">Sign Up</h4>
                    <p class="mb-0">
                      Enter your email and password to register
                    </p>
                  </div>
                  <div class="card-body">
                    <form role="form">
                      <div class="input-group input-group-outline mb-3">
                        <label class="form-label">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="user_name"
                          value={user_name}
                          onChange={inputHanlder}
                        />
                      </div>
                      <p style={{ color: "red" }}>{errors.user_name}</p>
                      <div class="input-group input-group-outline mb-3">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          value={email}
                          onChange={inputHanlder}
                        />
                      </div>
                      <p style={{ color: "red" }}>{errors.email}</p>
                      <div class="input-group input-group-outline mb-3">
                        <label class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          value={password}
                          onChange={inputHanlder}
                        />
                      </div>
                      <div class="input-group input-group-outline mb-3">
                        <label class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="password2"
                          value={password2}
                          onChange={inputHanlder}
                        />
                      </div>
                      <p style={{ color: "red" }}>{errors.password}</p>
                      <div class="form-check form-check-info text-start ps-0">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I agree the{" "}
                          <a
                            href="javascript:;"
                            class="text-dark font-weight-bolder"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                      <div class="text-center">
                        <button
                          type="submit"
                          class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                          onClick={submitHandler}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-2 text-sm mx-auto">
                      Already have an account?
                      <Link to="/signin">Sign in</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterForm;