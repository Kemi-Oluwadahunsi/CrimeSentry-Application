import loginPix from "../../assets/loginPix.png";
import google from "../../assets/flat-color-icons_google.png";
import apple from "../../assets/ant-design_apple-filled.png";
import facebook from "../../assets/facebookIcon.png";
import { Link } from "react-router-dom/dist";
import logo from "/logo.png";
export default function Login() {
  return (
    <div className="pt-[2rem]">
      <div className="flex justify-between px-[8rem] items-center">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <Link to={"/"}>
          <button className="bg-[#7ED957] py-2 px-5 text-[#fff] rounded-lg hover:scale-105">
            Home
          </button>
        </Link>
      </div>

      <section className=" py-[4rem] flex justify-between px-[10rem]">
        <div className=" flex flex-col gap-8 basis-[35%]">
          <h2 className="text-[2.5rem] font-[600]">Sign in</h2>
          <h5 className="text-[1rem] font-[400]">
            Sign in to access your CrimeSentry account
          </h5>
          <div className="flex flex-col gap-8">
            <div className=" relative w-full">
              <label
                htmlFor="email"
                className=" text-[black] font-[600] px-[2rem] bg-[white] 
             border-0 absolute top-[-1rem] left-[2%] text-center "
              >
                Email
              </label>
              <input
                type="text"
                placeholder="john.doe@gmail.com"
                className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
              />
            </div>
            <div className=" relative">
              <label
                htmlFor="password"
                className=" text-[black] font-[600] px-[2rem] bg-[white] 
             border-0 absolute top-[-1rem] left-[2%] text-center"
              >
                Password
              </label>

              <input
                type="password"
                placeholder="************"
                className="px-2 py-3 rounded-sm outline-none text-[black] w-full "
              />
            </div>
          </div>

          <div className="flex justify-between md:gap-[9rem]">
            <span className="font-[600]">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              &nbsp; Remember me
            </span>
            <span className="text-[#FF8682]">
              <Link to="/password-reset">Forget Password</Link>
            </span>
          </div>
          <div className="w-full">
            <input
              type="submit"
              value="Sign in"
              className="p-2 cursor-pointer rounded-sm outline-none text-lg bg-[#7ED957] font-[600] hover:bg-[#519135] w-full"
            />
          </div>

          <p className="text-center">
            Don&apos;t have an account?
            <span className="text-[#FF8682]">
              &nbsp;
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </p>

          <div className="flex flex-col gap-[3rem] w-full">
            <div className="relative">
              <hr className="bg-[gray]" />
              <p className="absolute text-[gray] p-2 -top-[1.3rem] left-[11rem] border-none bg-[black]">
                Or login with
              </p>
            </div>

            <div className="flex justify-between w-full">
              <img
                src={facebook}
                alt="facebook-icon"
                className="border px-10 py-3 rounded-md border-[#7ED957]"
              />
              <img
                src={google}
                alt="facebook-icon"
                className="border px-10 py-3 rounded-md border-[#7ED957]"
              />
              <img
                src={apple}
                alt="facebook-icon"
                className="border px-10 py-3 rounded-md border-[#7ED957]"
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={loginPix}
            alt="phone-image"
            className="hidden max-w-[30em] md:block "
          />
        </div>
      </section>
    </div>
  );
}
