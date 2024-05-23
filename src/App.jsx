import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing-Page/index";
import Login from "./components/Login";
import PasswordReset from "./components/ForgetPassword";

function App() {
  return (
    <>
      <div className="bg-black text-[#fff]">
        <Header />
        <LandingPage />
        {/* <Login /> */}
        {/* <PasswordReset /> */}
      </div>
    </>
  );
}

export default App;
