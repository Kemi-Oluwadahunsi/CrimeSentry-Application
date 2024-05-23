import loginPix from "../../assets/loginPix.png";
import google from "../../assets/flat-color-icons_google.png";
import apple from "../../assets/ant-design_apple-filled.png";
import facebook from "../../assets/facebookIcon.png";
export default function Login() {
  return (
    <section className=" py-[4rem] flex justify-around">
      <div className=" flex flex-col gap-8 basis-[30%]">
        <h2 className="text-[2.5rem] font-[600]">Login</h2>
        <h5 className="text-[1rem] font-[400]">
          Login to access your CrimeSentry account
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
              className="px-2 py-3 rounded-sm outline-none text-[black] w-full "
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
            <a href="#">Forget Password</a>
          </span>
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Login"
            className="p-2 cursor-pointer rounded-sm outline-none text-[white] bg-[#7ED957] font-[600] hover:bg-[#519135] w-full"
          />
        </div>

        <p className="text-center">
          Don&apos;t have an account?
          <span className="text-[#FF8682]">
            &nbsp;
            <a href="#">Sign up</a>
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
          className="hidden max-w-[25rem] md:block "
        />
      </div>
    </section>
  );
}
