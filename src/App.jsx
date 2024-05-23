import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing-Page/index";
import SignUp from "./components/Login-Signup/SignUp";
// import Header2 from "./components/Header/Header2";

function App() {
  return (
    <>
      <div className="bg-black text-[#fff]">
        <Header />
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/landing-page" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
