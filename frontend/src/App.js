import Dashboard from "./Views/Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from "./Views/Account Pages/Signin";
import Register from "./Views/Account Pages/Register";
import Profile from "./Views/Account Pages/Profile";
import Tables from "./Views/Pages/Tables";
import Editprofile from "./Views/Account Pages/Editprofile";
import Homepage from "./Views/Pages/Homepage";
import Search from "./Views/Pages/Search";
import Report from "./Views/Pages/Report";
import { AuthenticatedRoute } from "./utils/AuthenticatedRoute";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route element={<AuthenticatedRoute />}>
              <Route path="/signin" element={<Signin />}></Route>
            </Route>

            <Route element={<AuthenticatedRoute />}>
              <Route path="/register" element={<Register />}></Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/search" element={<Search />}></Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route exact path="/report/:name" element={<Report />}></Route>
            </Route>
            <Route exact path="/tables" element={<Tables />}></Route>
            <Route exact path="/editprofile" element={<Editprofile />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
