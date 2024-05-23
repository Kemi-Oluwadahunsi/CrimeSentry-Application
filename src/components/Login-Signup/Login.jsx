import loginPix from "../../assets/loginPix.png";
import google from "../../assets/flat-color-icons_google.png";
import apple from "../../assets/ant-design_apple-filled.png";
import facebook from "../../assets/facebookIcon.png";
export default function Login() {
  return (
    <section className=" mt-[4rem] flex justify-around h-[100vh]">
      <div className=" ">
        <h2 className="text-[2.5rem] font-[600]">Login</h2>
        <h5 className="text-[1rem] font-[400] mb-8">
          Login to access your travelwise account
        </h5>
        <div className="mt-[1.5rem] relative mb-8">
          <label
            htmlFor="email"
            className="ml-3 text-[1rem] text-[black] font-[600] w-[3rem] bg-[white] 
             border-0 absolute top-[-0.8rem] text-center "
          >
            Email
          </label>
          <input
            type="text"
            placeholder="john.doe@gmail.com"
            className="p-2 w-[25rem] rounded-sm outline-none text-[black]  "
          />
        </div>
        <div className="mt-[1.5rem] relative mb-6">
          <label
            htmlFor="password"
            className="ml-3 text-[1rem] text-[black] font-[600] w-[5rem] bg-[white] 
             border-0 absolute top-[-0.8rem] text-center "
          >
            Password
          </label>

          <input
            type="password"
            placeholder="************"
            className="p-2 w-[25rem]  rounded-sm outline-none text-[black]"
          />
        </div>
        <div className="flex gap-[6rem] md:gap-[9rem]">
          <span className="font-[600]">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            &nbsp; Remember me
          </span>
          <span className="text-[#FF8682]">
            <a href="#">Forget Password</a>
          </span>
        </div>
        <input
          type="submit"
          value="Login"
          className="p-2 w-[25rem] cursor-pointer rounded-sm outline-none text-[white] bg-[#7ED957] mt-10 font-[600] mb-2 hover:bg-[#519135]"
        />
        <p className="text-center">
          Don&apos;t have an account?
          <span className="text-[#FF8682]">
            &nbsp;
            <a href="#">Sign up</a>
          </span>
        </p>
        <div className="relative mb-12">
          <hr className="bg-[gray] mt-10" />
          <p className="absolute text-[gray] p-2 -top-[1.3rem] left-[9rem] border-none bg-[black]">
            Or login with
          </p>
        </div>
        <div className="flex justify-around gap-4">
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
