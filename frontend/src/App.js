import Dashboard from "./Views/Pages/Dashboard";
import Sidenavbar from "./Components/Sidenavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from "./Views/Account Pages/Signin";
import Register from "./Views/Account Pages/Register";
import Profile from "./Views/Account Pages/Profile";
import Tables from "./Views/Pages/Tables";
import Editprofile from "./Views/Account Pages/Editprofile";
import Logout from "./Views/Account Pages/Logout";
import { ProtectedRoute } from "./Views/Account Pages/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          {/* <Route exact path="/profile" element={<Profile />}></Route> */}
          <Route exact path="/logout" element={<Logout />}></Route>
          <Route exact path="/tables" element={<Tables />}></Route>
          <Route exact path="/editprofile" element={<Editprofile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
