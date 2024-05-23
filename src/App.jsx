import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing-Page/index";
import SignUp from "./components/Login-Signup/SignUp";
import "./App.css";
import Login from "./components/Login-Signup/Login";
import PasswordReset from "./components/Login-Signup/ForgetPassword";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="bg-black text-[#fff] font-[Inter]">
        <Header />
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
