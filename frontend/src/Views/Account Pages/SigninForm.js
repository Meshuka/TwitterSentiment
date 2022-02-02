import { React, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

const SigninForm = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputData;

  const [isError, SetIsError] = useState(false);

  // const [user, setUser] = useState();
  const inputHanlder = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login");
    console.log(email, password);
    axiosInstance
      .post("user/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log("response", res);
        // console.log("token", res.data.token);
        // console.log("status", res.status);
        // console.log("email", res.data.data.email);
        if (res.status == 200) {
          console.log("data", res.data);
          const id = res.data.data.id;
          const isFirstLoggedIn = res.data.data.is_registered;
          console.log("is1st", isFirstLoggedIn);
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("id", id);
          axiosInstance.defaults.headers["Authorization"] =
            "Token " + localStorage.getItem("access_token");
          axiosInstance.get(`user/me/${id}`).then((res) => {
            console.log(res);
          });
          if (!isFirstLoggedIn) {
            navigate("/search");
          } else {
            navigate("/dashboard");
          }

          // navigate("/profile", {
          //   state: {
          //     name: "CYZ",
          //   },
          // });
          console.log(res);
          console.log(res.data);
        } else {
          SetIsError(true);
          navigate("/signin");
          console.log(isError);
        }
      });
  };

  return (
    <>
    <div class="ex-form-1 pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                        <div class="text-box mt-5 mb-5">
                            <p class="mb-4">Don't have an account? Then please <Link to="/register"><span style={{color:"#6168ff"}}>Sign up</span></Link></p>

                            <form role="form" class="text-start">
                    {isError && (
                      <p style={{ color: "red" }}>
                        Incorrect username and password.
                      </p>
                    )}
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
                    <div class="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        class="form-check-label mb-0 ms-2"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn bg-gradient-primary w-100 my-4 mb-2"
                        onClick={submitHandler}
                      >
                        Log In
                      </button>
                    </div>
                    {/* <p class="mt-4 text-sm text-center">
                      Don't have an account?
                      <Link to="/register">Sign up</Link>
                    </p> */}
                  </form>

                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
    
    </>
  );
};

export default SigninForm;
