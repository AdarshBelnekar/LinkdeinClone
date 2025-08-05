import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const Layout = () => {
  const location = useLocation();
  const hideNavbarOn = ["/", "/register"];
  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  const isLoggedIn = true; // You can replace this with auth logic

  return (
    <>
      {shouldShowNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
