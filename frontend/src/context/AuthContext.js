import axiosInstance from "../axios";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );

  let [user, setUser] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

  const [isError, SetIsError] = useState(false);

  let loginUser = async (email, password) => {
    // e.preventDefault();
    console.log("email", email, password);

    let response = await axiosInstance.post("token/", {
      email: email,
      password: password,
    });

    let data = response.data;

    if (response.status === 200) {
      console.log(data);
      setAuthToken(data);
      setUser(jwt_decode(data.access));

      localStorage.setItem("authToken", JSON.stringify(data));

      const isFirstLoggedIn = jwt_decode(data.access).is_registered;
      console.log(isFirstLoggedIn);
      // console.log(JSON.parse(localStorage.getItem("authToken")).access);
      if (!isFirstLoggedIn) {
        navigate("/search");
      } else {
        navigate("/dashboard");
      }
    } else {
      SetIsError(true);
      navigate("/signin");
      console.log(isError);
    }
  };

  let logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  let updateToken = async () => {
    console.log("update token called", authToken.refresh);
    let response = await axiosInstance.post("token/refresh/", {
      refresh: authToken.refresh,
    });
    let data = response.data;
    console.log(response.data);
    // let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let duration = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, duration);
    return () => clearInterval(interval);
  }, [authToken]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
