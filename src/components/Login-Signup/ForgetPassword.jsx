import passwordReset from "../assets/forgetPassword.png";
import google from "../assets/flat-color-icons_google.png";
import apple from "../assets/ant-design_apple-filled.png";
import facebook from "../assets/facebookIcon.png";
export default function Login() {
  return (
    <section className=" mt-[4rem] flex justify-around h-[100vh]">
      <div className="">
        <p>Back to login</p>
        <h2 className="text-[2.5rem] font-[600]">Forgot your password?</h2>
        <h5 className="text-[1rem] font-[400] mb-8">
          Don&apos;t worry, happens to all of us. Enter your email below to{" "}
          <br />
          recover your password
        </h5>
        <div className="mt-[1.5rem] relative mb-">
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

        <input
          type="submit"
          value="Submit"
          className="p-2 w-[25rem] cursor-pointer rounded-sm outline-none text-[white] bg-[#7ED957] mt-10 font-[600] mb-2 hover:bg-[#519135]"
        />

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
          src={passwordReset}
          alt="phone-image"
          className="hidden max-w-[25rem] md:block "
        />
      </div>
    </section>
  );
}
