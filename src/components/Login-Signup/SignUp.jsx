import google from "../../assets/flat-color-icons_google.png";
import apple from "../../assets/ant-design_apple-filled.png";
import facebook from "../../assets/facebookIcon.png";
import signup from "../../assets/signUp.png";
import logo from "/logo.png"
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-[10rem] pt-[2rem] w-full">
        <div className="flex justify-end">
          <img src={logo} alt="" />
        </div>
        <section className=" py-[4rem] flex justify-between w-full">
          <div className="">
            <img
              src={signup}
              alt="phone-image"
              className=" w-[95%] hidden  md:block "
            />
          </div>

          <div className=" flex flex-col gap-6 basis-[45%]">
            <h2 className="text-[2.5rem] font-[600]">Sign Up</h2>
            <h5 className="text-[.9rem] font-[400]">
              Let’s get you all st up so you can access your personal account.
            </h5>

            <div className="flex gap-[2rem] justify-between">
              <p className="hover:text-[#7ED957] hover:underline underline-offset-4 cursor-pointer">
                As a Community Member
              </p>
              <p className="hover:text-[#7ED957] hover:underline underline-offset-4 cursor-pointer">
                As a Law Enforcement Member
              </p>
            </div>
            <div className="flex flex-col gap-[2.5rem] mt-4">
              <div className="flex flex-col gap-10">
                <div className="flex gap-4">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className=" text-[black] font-[600] px-[2rem] bg-[white] border-0 absolute top-[-1rem] left-[2%] text-center "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
                    />
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className=" text-[black] font-[600] px-[2rem] bg-[white] border-0 absolute top-[-1rem] left-[2%] text-center "
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className=" text-[black] font-[600] px-[2rem] bg-[white] border-0 absolute top-[-1rem] left-[2%] text-center "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="john.doe@gmail.com"
                      className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
                    />
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className=" text-[black] font-[600] px-[2rem] bg-[white] border-0 absolute top-[-1rem] left-[2%] text-center "
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+2348100000000"
                      className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
                    />
                  </div>
                </div>
              </div>
              <div className=" relative w-full">
                <label
                  htmlFor="email"
                  className=" text-[black] font-[600] px-[2rem] bg-[white] 
             border-0 absolute top-[-1rem] left-[2%] text-center "
                >
                  Password
                </label>
                <input
                  type="text"
                  placeholder="************"
                  className="px-2 py-3 rounded-sm outline-none text-[black] w-full"
                />
              </div>
              <div className=" relative">
                <label
                  htmlFor="password"
                  className=" text-[black] font-[600] px-[2rem] bg-[white] 
             border-0 absolute top-[-1rem] left-[2%] text-center"
                >
                  Confirm Password
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
                &nbsp; I agree to all the{" "}
                <span className="text-[#FF8682] cursor-pointer hover:underline underline-offset-4 decoration-[#FF8682]">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-[#FF8682] cursor-pointer hover:underline underline-offset-4 decoration-[#FF8682]">
                  {" "}
                  Privacy Policies
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center w-full p-2 bg-[#7ED957] font-[600] text-lg hover:bg-[#519135]">
              <button className="text-center">Sign Up</button>
            </div>

            <div className="flex flex-col gap-[3rem] w-full">
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-[#FF8682] hover:underline underline-offset-4 decoration-[#FF8682]">
                    Sign in
                  </span>
                </Link>
              </p>

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
        </section>
      </div>
    </>
  );
};

export default SignUp;
