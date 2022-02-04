import React, { useState, useEffect } from "react";
import { Link, Redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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

  // const validationHanlder = () => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!inputData.user_name) {
  //     errors.user_name = "Username is required";
  //   }
  //   if (!inputData.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(inputData.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!inputData.password) {
  //     errors.password = "Both password are required";
  //   } else if (inputData.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (inputData.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   if (!inputData.password2) {
  //     errors.password2 = "Both password are required";
  //   } else if (inputData.password2.length < 4) {
  //     errors.password2 = "Password must be more than 4 characters";
  //   } else if (inputData.password2.length > 10) {
  //     errors.password2 = "Password cannot exceed more than 10 characters";
  //   }

  //   setErrors(errors);
  //   return errors;
  // };

  const storeDataHandler = () => {
    axiosInstance
      .post("user/register/", {
        user_name: user_name,
        email: email,
        password: password,
        password2: password2,
      })
      .then((res) => {
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
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setErrors(validationHanlder(inputData));
    storeDataHandler();
  };

  return (
    <>
      <div class="ex-form-1 pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 offset-xl-3">
              <div class="text-box mt-5 mb-5">
                <p class="mb-4">Fill out the form below to sign up for the service. Already signed up? Then just <Link to="/signin"><span style={{color:"#6168ff"}}>Sign in</span></Link></p>
                <form role="form">
                        <div class="input-group input-group-outline mb-3">
                          {/* <label class="form-label">Name</label> */}
                          <input
                            type="text"
                            placeholder="Name"
                            class="form-control"
                            name="user_name"
                            value={user_name}
                            onChange={inputHanlder}
                          />
                        </div>
                        <p style={{ color: "red" }}>{errors.user_name}</p>
                        <div class="input-group input-group-outline mb-3">
                          {/* <label class="form-label">Email</label> */}
                          <input
                            type="email"
                            placeholder="Email"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={inputHanlder}
                          />
                        </div>
                        <p style={{ color: "red" }}>{errors.email}</p>
                        <div class="input-group input-group-outline mb-3">
                          {/* <label class="form-label">Password</label> */}
                          <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            name="password"
                            value={password}
                            onChange={inputHanlder}
                          />
                        </div>
                        <div class="input-group input-group-outline mb-3">
                          {/* <label class="form-label">Confirm Password</label> */}
                          <input
                            type="password"
                            placeholder="Confirm Password"
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
                            // checked
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
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default RegisterForm;
