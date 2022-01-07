import React, { useState } from "react";
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

  const { user_name, email, password, password2 } = inputData;

  let [isValid, setIsValid] = useState(true);
  let [errors, setErrors] = useState({});

  const inputHanlder = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // const notify = () => {
  //   console.log("notigy");
  //   toast("Created new account");
  // };

  const validationHanlder = () => {
    // if (!user_name) {
    //   setIsValid = false;
    //   errors["user_name"] = "Cannot be empty";
    // }
    // if (user_name !== "undefined") {
    //   if (!user_name.match(/^[a-zA-Z]+$/)) {
    //     setIsValid = false;
    //     errors["name"] = "Only letters";
    //   }
    // }
    if (
      user_name === "" ||
      email === "" ||
      password === "" ||
      password2 === ""
    ) {
      setIsValid(false);
      errors["data"] = "Field cannot have empty value";
    }
    setErrors({ errors: errors });
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let data = validationHanlder();
    console.log("daya", data);
    if (validationHanlder()) {
      alert("User created");
      console.log("Sign up done");
      console.log(user_name, email, password, password2);
      axiosInstance
        .post("user/register/", {
          user_name: user_name,
          email: email,
          password: password,
          password2: password2,
        })
        .then((res) => {
          navigate("/signin");
          // notify("User created");
          console.log(res);
          console.log(res.data);
        })
        .catch((e) => {
          console.log("error", e.message);
          // notify("Error");
        });
    } else {
      console.log(errors);
      alert(errors.data);
      navigate("/register");
    }
  };
  return (
    <main class="main-content  mt-0">
      <ToastContainer />
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
