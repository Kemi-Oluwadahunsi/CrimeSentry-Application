import { Link } from "react-router-dom/dist";
import logo from "/logo.png";
const Header = () => {
  return (
    <div>
      <div className="bg-[#1E1E1E] flex justify-between px-[5rem] items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <nav className="text-[#fff] basis-[45%]">
          <ul className="flex justify-between text-lg">
            <li className="hover:underline underline-offset-8 decoration-[#7ED957] decoration-4 cursor-pointer hover:scale-105 px-4">
              Home
            </li>
            <li className="hover:underline underline-offset-8 decoration-[#7ED957] decoration-4 cursor-pointer hover:scale-105 px-4">
              Explore
            </li>
            <li className="hover:underline underline-offset-8 decoration-[#7ED957] decoration-4 cursor-pointer hover:scale-105 px-4">
              About
            </li>
            <li className="hover:underline underline-offset-8 decoration-[#7ED957] decoration-4 cursor-pointer hover:scale-105 px-4">
              Contact
            </li>
            <li className="hover:underline underline-offset-8 decoration-[#7ED957] decoration-4 cursor-pointer hover:scale-105 px-4">
              Blog
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center basis-[20%]">
          <div className="flex w-full justify-between">
            <Link to={"/login"}>
              <button className="border border-[#7ED957] py-2 px-5 text-[#7ED957] rounded-lg hover:scale-105">
                Sign in
              </button>
            </Link>
            
            <Link to={"/signup"}>
              <button className="bg-[#7ED957] py-2 px-5 text-[#fff] rounded-lg hover:scale-105">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
