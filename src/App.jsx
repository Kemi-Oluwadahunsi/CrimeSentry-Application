import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing-Page/index";
import SignUp from "./components/Login-Signup/SignUp";
import "./App.css";
import Login from "./components/Login";
import PasswordReset from "./components/ForgetPassword";

function App() {
  return (
    <>
      <div className="bg-black text-[#fff]">
      <div className="bg-black text-[#fff]">
        <Header />
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing-page" element={<PasswordReset />} />
        </Routes>
      </div>
        <LandingPage />
        {/* < /> */}
      </div>
    </>
  );
}

export default App;
