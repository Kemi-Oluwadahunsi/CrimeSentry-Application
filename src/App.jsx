import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing-Page/index";
import SignUp from "./components/Login-Signup/SignUp";
import "./App.css";
import Login from "./components/Login-Signup/Login";
import PasswordReset from "./components/Login-Signup/ForgetPassword";
import Verify from "./components/Login-Signup/Verify";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom/dist";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/signup", "/login", "/password-reset"];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  return (
    <>
      <div className="bg-black text-[#fff] font-[Inter]">
        {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
        {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
}

export default App;
