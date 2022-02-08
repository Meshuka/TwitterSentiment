import Dashboard from "./Views/Pages/Dashboard";
import Sidenavbar from "./Components/Sidenavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from "./Views/Account Pages/Signin";
import Register from "./Views/Account Pages/Register";
import Profile from "./Views/Account Pages/Profile";
import Tables from "./Views/Pages/Tables";
import Editprofile from "./Views/Account Pages/Editprofile";
import Homepage from "./Views/Pages/Homepage";
import Search from "./Views/Pages/Search";
import { ProtectedRoute } from "./Views/Account Pages/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const auth = localStorage.getItem("authToken");
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route
              exact
              path="/signin"
              element={auth ? <Dashboard /> : <Signin />}
            ></Route>
            <Route
              exact
              path="/register"
              element={auth ? <Dashboard /> : <Register />}
            ></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route exact path="/tables" element={<Tables />}></Route>
            <Route exact path="/editprofile" element={<Editprofile />}></Route>
            <Route
              exact
              path="/search"
              element={auth ? <Search /> : <Signin />}
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
